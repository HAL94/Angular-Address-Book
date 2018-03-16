import { NgModule } from "@angular/core";
import { ContactListComponent } from "../contact-list/contact-list.component";
import { ContactItemComponent } from "../contact-list/contact-item/contact-item.component";
import { RouterModule } from "@angular/router";
import { HighlightPipe } from '../pipes/highlight.pipe';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ContactListComponent,
    ContactItemComponent,
    HighlightPipe
  ],
  imports: [RouterModule, CommonModule],
  exports: [ContactListComponent, ContactItemComponent, HighlightPipe]
})
export class SharedModule
{}
