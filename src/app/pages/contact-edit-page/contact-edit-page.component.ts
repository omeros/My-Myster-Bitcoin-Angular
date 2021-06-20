import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { ContactService } from 'src/app/services/contact.service';
import { ImgUploadService } from 'src/app/services/img-upload.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {of} from 'rxjs';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router: Router, private location: Location, private contactService: ContactService, private imgUploadService: ImgUploadService) { }

  contact : Contact
  oldContact : Contact
  isLoading : false
  myImage : null

  ngOnInit(): void {
    mergeMap((params : Params ) => params.id?  this.contactService.getById(params.id) : of(this.contactService.getEmptyContact()))( this.route.params).subscribe(contact => this.contact = contact as Contact ) 
 


  // ngOnInit(): void {
  //   this.route.data.subscribe(data => {
  //     if (!Object.keys(data).length) {
  //       this.contact = this.contactService.getEmptyContact()
  //       console.log('empty contact',Object.keys(data))
  //     } else {
  //       this.contact = data.contact
  //       console.log('old contact')
  //     }
  //   })

    
    this.route.params.pipe(
      mergeMap(params=> this.contactService.getById(params.id))
      ).subscribe(contact =>{
        this.oldContact = contact })
        console.log('ths contact',this.oldContact._id)
}
    onSaveContact(){
    console.log('ths contact',this.contact)
    this.contactService.save(this.contact)
    this.router.navigateByUrl('/')
  }
  deleteContact(){
    this.contactService.remove(this.contact._id)
    this.router.navigateByUrl('/')
  }

  async uploadImage(imageInput : any) {
    // const respond = await this.imgUploadService.uploadImg(ev);
    //  console.log('onUploadImg -> respond', respond)
     console.log('onUploadImg -> event', imageInput.files[0])
    //  const file: File = imageInput.files[0];
    //  const reader = new FileReader();
    // this.isLoading = true

     const res = await this.imgUploadService.uploadImg(imageInput.files[0])
     console.log('onUploadImg -> respond', res)
     this.myImage = res.url
    // this.isLoading = false
  }
}


    // this.coin = await this.bitcoinService.getRate();         /// with promis
