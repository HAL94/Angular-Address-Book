import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { ContactListModule } from "./contact-list/contact-list.module";
import { FilterSearchModule } from "./filter-search/filter-search.module";
import { ContactDetailModule } from "./contact-detail/contact-detail.module";
import { ContactModalModule } from "./contact-modal/contact-modal.module";
import { SharedModule } from "./shared-modules/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    FilterSearchModule,
    ContactListModule,
    ContactDetailModule,
    ContactModalModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
