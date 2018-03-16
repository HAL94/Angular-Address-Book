import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ContactFormDialogComponent } from './contact-form/contact-form-dialog.component';
import { Contact } from '../contact';
import { ContactService } from '../services/contact.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-contact-form-dialog-container',
  template: ''
})

export class ContactEditDialogContainerComponent implements OnInit, OnDestroy {
  private dialogRef: MatDialogRef<ContactFormDialogComponent>;
  private contact: Contact;
  private key: string;
  private dialogMode = '';
  private subscription: Subscription;
  config: MatDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };


  constructor(private contactService: ContactService, private dialog: MatDialog,
              private route: ActivatedRoute, private location: Location,
             ) {


  }

  ngOnInit() {
    this.subscription = this.route.params.switchMap((value) => {
        this.key = value['key'];
        return this.contactService.getContact(value['key']).map(
          (snapshot) => {
            console.log(snapshot);
            return  <Contact> snapshot;
          }
        );
    }).subscribe( (value) => {
      console.log(value);
      this.contact = value;
      this.contact.$key = this.key;
      this.config.data = this.contact;
      this.openDialog();
    });
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  openDialog() {
    this.dialogMode = this.route.snapshot.queryParams['dialog_mode'];
    this.dialogRef = this.dialog.open(ContactFormDialogComponent, this.config);
    this.dialogRef.afterClosed().subscribe
    (
      result => {
        console.log('The dialog was closed');
        console.log(result);
        if (typeof result !== 'undefined' && result !== null) {
          this.contactService.updateContact(result);
        }
        this.dialogRef = null;
        this.location.back();
        this.subscription.unsubscribe();
      }
    );
  }
}
