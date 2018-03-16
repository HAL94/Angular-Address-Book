import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ContactDetailComponent } from "./contact-detail.component";

const contactDetailRoutes: Routes = [
  {
    path: '', component: ContactDetailComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactDetailRoutes)
  ],
  exports: [RouterModule]
})
export class ContactDetailRoutingModule { }
