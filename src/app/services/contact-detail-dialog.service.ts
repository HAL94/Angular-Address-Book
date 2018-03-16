import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from "@angular/material";

import { ProgressSpinnerModalComponent } from "../contact-detail/progress-spinner-modal/progress-spinner-modal.component";

@Injectable()
export class ContactDetailDialogService {
  private dialogRef: MatDialogRef<any>;
  private config: MatDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };

  constructor(private dialog: MatDialog) { }

  openProgressSpinnerModal()
  {
    this.dialogRef = this.dialog.open(ProgressSpinnerModalComponent, this.config);
  }

  closeDialog()
  {
    this.dialogRef.close();
  }
}
