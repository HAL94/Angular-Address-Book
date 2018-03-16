import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from '../services/navbar.service';
import { Contact } from '../contact';
import { ContactService } from '../services/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Upload } from '../upload';
import { UploadService } from '../services/upload.service';
import { ContactDetailDialogService } from '../services/contact-detail-dialog.service';

declare var $: any;

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contactForm: FormGroup;
  contact: Contact;
  editMode = false;
  selectedFile: File;

  private key: string;
  private upload: Upload;

  constructor(private navbarService: NavbarService, private location: Location,
              private route: ActivatedRoute, private contactService: ContactService,
              private uploadService: UploadService) {

  }

  ngOnInit() {
    this.navbarService.hide();

    // this.route.params.switchMap(value => {
    //   this.key = value['key'];
    //   return this.contactService.getContact(value['key']).map(
    //     (snapshot) => {
    //       return <Contact> snapshot;
    //     }
    //   );
    // }).subscribe(
    // (value) => {
    //   this.contact = value;
    //   // console.log(this.contact);
    //   if (this.contact) {
    //     this.contact.$key = this.key;
    //     this.initForm();
    //   }
    // });

    this.key = this.route.snapshot.params['key'];
    this.contactService.getContact(this.key).subscribe((contact) => {
        if (contact) {
          this.contact = <Contact> contact;
          this.contact.$key = this.key;
          this.initForm();
        } else {
          console.log('null key');
        }
    });
  }

  onBack() {
    this.navbarService.show();
    this.location.back();
  }

  onIconClick() {
    $("input[id='profile-img']").click();
  }

  onEdit() {
    this.editMode = !this.editMode;
    this.initForm();
  }

  onSubmit() {
    this.updateContactFields();
    if (this.selectedFile) {
      this.upload = new Upload(this.selectedFile);
      this.uploadService.uploadAndUpdateContactWithProfileImage(this.contact, this.upload);
    }
    else {
      this.contactService.updateContact(this.contact);
    }
    this.editMode = !this.editMode;
  }

  private initForm() {
    // console.log(this.contact);
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contact.name, Validators.required),
      'mobile': new FormControl(this.contact.mobile, Validators.required),
      'email': new FormControl(this.contact.email,
        [
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ]
      ),
      'address': new FormControl(this.contact.address),
      'company': new FormControl(this.contact.company),
      'phone': new FormControl(this.contact.phone),
      'website': new FormControl(this.contact.website),
      'birthday': new FormControl(this.contact.birthday),
      'title': new FormControl(this.contact.title),
      'nickname': new FormControl(this.contact.nickname),
      'relationship': new FormControl(this.contact.relationship)

    });
  }

  private updateContactFields() {
    this.contact.name = this.contactForm.value['name'];
    this.contact.mobile = this.contactForm.value['mobile'];
    this.contact.email = this.contactForm.value['email'];
    this.contact.address = this.contactForm.value['address'];
    this.contact.company = this.contactForm.value['company'];
    this.contact.website = this.contactForm.value['website'];
    this.contact.birthday = this.contactForm.value['birthday'];
    this.contact.title = this.contactForm.value['title'];
    this.contact.nickname = this.contactForm.value['nickname'];
    this.contact.relationship = this.contactForm.value['relationship'];
  }



  getImageUrl(){
    if (this.contact.profileImg.url)
    {
     return this.contact.profileImg.url;
    }
    else
    {
      return '../../assets/default-profile.png';
    }
  }
}
