import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Upload } from "../upload";
import { ContactService } from "./contact.service";
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;
import { Contact } from "../contact";
import { ContactDetailDialogService } from "./contact-detail-dialog.service";

@Injectable()
export class UploadService {

  private basePath = '/images';

  constructor(private contactService: ContactService,
              private contactDetailDialogService: ContactDetailDialogService) { }

  uploadAndUpdateContactWithProfileImage(contact: Contact, upload: Upload)
  {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`)
      .put(upload.file);
    this.contactDetailDialogService.openProgressSpinnerModal();

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,

      (snapshot: UploadTaskSnapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.log(error)
      },
      (): any => {

        upload.url = uploadTask.snapshot.downloadURL;
        contact.profileImg.name = upload.file.name;
        contact.profileImg.url = upload.url;
        this.contactService.updateContact(contact);
        this.contactDetailDialogService.closeDialog();
        console.log(contact.profileImg);
      }
    );
  }
}
