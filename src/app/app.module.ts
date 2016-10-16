import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
