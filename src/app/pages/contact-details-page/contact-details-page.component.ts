import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {


  contact: Contact
  // contacts$ :Observable<Contact[]>
  subscription : Subscription
  constructor(private contactService: ContactService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    // this.route.snapshot.params.id   - without observable
    this.route.params.pipe(
      mergeMap(params=> this.contactService.getById(params.id))
    ).subscribe(contact =>{
      this.contact = contact })
  }
  

}
