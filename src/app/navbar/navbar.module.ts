import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
