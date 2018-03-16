import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ContactListComponent } from "./contact-list.component";
import { ContactAddDialogContainerComponent } from "../contact-modal/contact-add-dialog-container.component";
import { ContactEditDialogContainerComponent } from "../contact-modal/contact-edit-dialog-container.component";

const contactListRoutes: Routes = [
  {path: '', component: ContactListComponent, children:
    [
      {
        path: 'contact-dialog',
        component: ContactAddDialogContainerComponent
      },
      {
        path: 'contact-dialog/:key',
        component: ContactEditDialogContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactListRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ContactListRoutingModule { }
