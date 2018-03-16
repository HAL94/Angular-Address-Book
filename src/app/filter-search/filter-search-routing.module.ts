import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FilterSearchComponent } from "./filter-search.component";
import { ContactEditDialogContainerComponent } from "../contact-modal/contact-edit-dialog-container.component";

const filterSearchRoutes: Routes = [
  {
    path: '', component: FilterSearchComponent, children:
    [
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
    RouterModule.forChild(filterSearchRoutes)
  ],
  exports: [RouterModule]
})
export class FilterSearchRoutingModule { }
