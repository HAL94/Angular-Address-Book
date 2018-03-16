import { Component, OnInit  } from '@angular/core';

import { ContactService } from '../services/contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements OnInit  {
  query:string;
  contactList: Contact[];
  searchableList = ['name','mobile', 'email'];


  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(item => {
      this.contactList = item.map( i=> {
        let contact: Contact = <Contact> i.payload.toJSON();
        contact["$key"] = i.key;
        return contact;
      });
      console.log(this.contactList);
    });

  }
}
