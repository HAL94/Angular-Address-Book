import {Component, OnInit} from '@angular/core';

import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';

@Component(
  {
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
  }
)

export class ContactListComponent implements OnInit {
  contactList: Contact[];

  constructor(private contactService: ContactService)
  {}

  ngOnInit() {
   this.contactService.getContacts().subscribe(item => {
      this.contactList = item.map( i=> {
          let contact: Contact = <Contact> i.payload.toJSON();
          contact["$key"] = i.key;
          return contact;
      });
      // this.contactService.contacts = this.contactList;
      console.log(this.contactList);
    });
  }


}


