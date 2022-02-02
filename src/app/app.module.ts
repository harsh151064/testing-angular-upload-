import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { FileDragNDropDirective } from './file-drag-n-drop.directive';
import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';



@NgModule({
  declarations: [
    AppComponent,
    FileDragNDropDirective,
    DialogConfirmComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,ReactiveFormsModule,MatMenuModule,MatDialogModule,MatSnackBarModule,MatGridListModule,MatButtonModule,MatListModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
