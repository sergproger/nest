import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule  } from './app-routing.module';

import "materialize-css";
import { MaterializeModule } from "angular2-materialize";

import { FirstviewComponent } from './firstview/firstview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './navbar/side-menu/side-menu.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HostelsComponent } from './hostels/hostels.component';
import { HostelComponent } from './hostels/hostel/hostel.component';

import { PageNotFoundComponent } from './404error/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MaterializeModule
  ],
  declarations: [
    AppComponent,
    FirstviewComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    SideMenuComponent,
    RegistrationComponent,
    ContactsComponent,
    HostelsComponent,
    HostelComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
