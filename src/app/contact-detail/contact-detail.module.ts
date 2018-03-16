import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule, MAT_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';
import { ContactDetailRoutingModule } from './contact-detail-routing.module';

import { ContactDetailComponent } from './contact-detail.component';
import { ProgressSpinnerModalComponent } from './progress-spinner-modal/progress-spinner-modal.component';
import { SafeStylePipe } from '../pipes/safe-style.pipe';
import { FirstLetterCapitalizorPipe } from '../pipes/first-letter-capitalizor.pipe';


@NgModule({
  declarations: [
    ContactDetailComponent,
    ProgressSpinnerModalComponent,
    SafeStylePipe,
    FirstLetterCapitalizorPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ContactDetailRoutingModule
  ],
  providers: [{provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'never'}}],
  entryComponents:[ProgressSpinnerModalComponent]
})
export class ContactDetailModule { }
