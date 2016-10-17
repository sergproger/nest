import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import "materialize-css";
import { MaterializeModule } from "angular2-materialize";

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component'
import { SideMenuComponent } from './navbar/side-menu/side-menu.component'

@NgModule({
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SideMenuComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
