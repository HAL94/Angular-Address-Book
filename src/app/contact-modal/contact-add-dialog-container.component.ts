import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

import { ContactService } from "../services/contact.service";
import { ContactFormDialogComponent } from "./contact-form/contact-form-dialog.component";

@Component({
  selector: 'app-contact-add-dialog-container',
  template: ''
})

export class ContactAddDialogContainerComponent implements OnInit {
  private dialogRef: MatDialogRef<ContactFormDialogComponent>;
  private config: MatDialogConfig = {
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
              private location: Location) {

    this.openDialog();
  }

  ngOnInit() {

  }

  openDialog() {
    this.dialogRef = this.dialog.open(ContactFormDialogComponent, this.config);
    this.dialogRef.afterClosed().subscribe
    (
      result => {
        console.log('The dialog was closed');
        console.log(result);

        if (typeof result !== 'undefined' && result !== null) {
          this.contactService.addContact(result);
        }
        this.location.back();
      }
    );
  }
}
