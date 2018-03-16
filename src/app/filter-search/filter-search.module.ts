import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterSearchComponent } from './filter-search.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { ContactModalModule } from "../contact-modal/contact-modal.module";
import { RouterModule } from "@angular/router";
import { FilterSearchRoutingModule } from "./filter-search-routing.module";
import { SharedModule } from "../shared-modules/shared.module";


@NgModule({
  declarations: [
    FilterSearchComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactModalModule,
    RouterModule,
    SharedModule,
    FilterSearchRoutingModule
  ]

})
export class FilterSearchModule { }
