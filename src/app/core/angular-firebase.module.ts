import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from 'angularfire2';
import { environment } from "../../environments/environment";


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule
  ]
})
export class AngularFirebaseModule { }
