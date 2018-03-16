import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Contact } from '../../contact';

@Component({
  selector: 'app-contact-form-dialog',
  templateUrl: './contact-form-dialog.component.html',
  styleUrls: ['./contact-form-dialog.component.css']
})
export class ContactFormDialogComponent implements OnInit {
  contactDummy:Contact = new Contact('','','');


  constructor(
    public dialogRef: MatDialogRef<ContactFormDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: Contact) { }

  ngOnInit() {

    if (this.data !== null && typeof this.data !== 'undefined')
    {
        this.contactDummy = this.data;
    }
  }

  close():void
  {
    this.dialogRef.close();
  }

}
