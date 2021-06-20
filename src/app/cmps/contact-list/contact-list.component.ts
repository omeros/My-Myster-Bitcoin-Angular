import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[]

  constructor() { }
  trackByFn(idx, contact: Contact) {
    return contact._id
  }


  ngOnInit(): void {
  }

}
