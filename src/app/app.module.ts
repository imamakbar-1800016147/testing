import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from '../environments/environment'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { ListMahasiswaComponent } from './list-mahasiswa/list-mahasiswa.component';
import { StudentsService } from './shared/students.service'


@NgModule({
  declarations: [
    AppComponent,
    MahasiswaComponent,
    ListMahasiswaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }