import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactModalModule } from "../contact-modal/contact-modal.module";
import { SharedModule } from "../shared-modules/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ContactListRoutingModule,
    ContactModalModule,
    SharedModule
  ]
})
export class ContactListModule { }
