import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

// remove contact should return observable or promiss 


@Component({
  selector: 'app-contact',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {

  contacts: Contact[]
  contacts$ :Observable<Contact[]>
  subscription : Subscription
  constructor(private contactService: ContactService) { }



  ngOnInit(): void {
  // this.subscription = this.contactService.Contacts$.subscribe( contacts =>{
  //     this.contacts = contacts
  //         console.log('contacts',contacts)
  // })
  this.contacts$ = this.contactService.Contacts$
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe()
  // }

}
