import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Contact } from '../contact';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class DataStorageService  {
  private contacts: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.contacts = this.db.list('contacts');
  }

  getContacts() {
    return this.contacts;
  }

  getContact(id: string) {
    console.log(id);
    return this.db.object('contacts/' + id).valueChanges();
  }

  addContact(contact: Contact) {
    this.contacts.push({
      name: contact.name,
      mobile: contact.mobile,
      email: contact.email,
      address: contact.address,
      profileImg: contact.profileImg,
      nickname: contact.nickname,
      company: contact.company,
      title: contact.title,
      phone: contact.phone,
      website: contact.website,
      birthday: contact.birthday,
      relationship: contact.relationship
    }).then(value => console.log(value));
  }

  updateContact(contact: Contact) {
    console.log(contact);
    this.contacts.update(contact.$key, {
      name: contact.name,
      mobile: contact.mobile,
      email: contact.email,
      address: contact.address,
      profileImg: contact.profileImg,
      nickname: contact.nickname,
      company: contact.company,
      title: contact.title,
      phone: contact.phone,
      website: contact.website,
      birthday: contact.birthday,
      relationship: contact.relationship
    }).catch(value => console.log(value));
  }

  deleteContact(id: string) {
    this.contacts.remove(id).catch(error => console.log(error));
  }

}
