import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { ContactFormDialogComponent } from './contact-form/contact-form-dialog.component';
import { ContactEditDialogContainerComponent } from './contact-edit-dialog-container.component';
import { ContactAddDialogContainerComponent } from './contact-add-dialog-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactFormDialogComponent,
    ContactEditDialogContainerComponent,
    ContactAddDialogContainerComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [],
  entryComponents:[ContactFormDialogComponent]
})
export class ContactModalModule { }
