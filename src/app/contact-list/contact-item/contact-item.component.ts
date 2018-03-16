import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";

import { ContactService } from '../../services/contact.service';
import { Contact } from '../../contact';


@Component(
  {
    selector: 'app-contact-item',
    templateUrl: './contact-item.component.html',
    styleUrls: ['./contact-item.component.css']
  }
)

export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() query: string;

  constructor
  (
    private contactService:ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit()
  {

  }

  onDeleteContact()
  {
    console.log('id passed: ' + this.contact.$key);
    this.contactService.deleteContact(this.contact.$key);
  }

  onNavigateToDetails()
  {
    console.log('navigating to details of ' + this.contact.$key);
    this.router.navigate(['/contact-detail', this.contact.$key]);
  }

  onNavigateToFormModal()
  {
    this.router.navigate(['contact-dialog', this.contact.$key],{relativeTo: this.route, queryParams: {dialog_mode: 'edit'}});
  }
}
