import { Injectable } from '@angular/core';

import { Contact } from '../contact';
import { DataStorageService } from './data-storage.service';

@Injectable()
export class ContactService {

  constructor(private dataStorageService: DataStorageService) {

  }

  getContacts()  {
    return this.dataStorageService.getContacts().snapshotChanges();
  }

  getContact(key: string)  {
    return this.dataStorageService.getContact(key);
  }

  addContact(contact: Contact)  {
    this.dataStorageService.addContact(contact);
  }

  deleteContact(id: string)  {
    this.dataStorageService.deleteContact(id);
  }

  updateContact(contact: Contact)  {
    this.dataStorageService.updateContact(contact);
  }
}
