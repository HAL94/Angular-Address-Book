import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ContactService } from '../services/contact.service';
import { NavbarService } from "../services/navbar.service";
import { UploadService } from "../services/upload.service";
import { DataStorageService } from "../services/data-storage.service";
import { RouterModule } from "@angular/router";
import { NavbarModule } from '../navbar/navbar.module';
import { AngularFirebaseModule } from "./angular-firebase.module";
import { ContactDetailDialogService } from "../services/contact-detail-dialog.service";

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    AngularFirebaseModule,
    RouterModule
  ],
  exports: [NavbarModule, AngularFirebaseModule],
  providers: [ContactService, NavbarService, UploadService, DataStorageService, ContactDetailDialogService]
})
export class CoreModule { }
