import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstviewComponent } from './firstview/firstview.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegistrationComponent } from './registration/registration.component';
import { HostelsComponent } from './hostels/hostels.component';

import { PageNotFoundComponent } from './404error/page-not-found.component';

import {EntranceComponent} from './entrance/entrance.component'


const routes: Routes = [
  { path: '', redirectTo: '/firstview', pathMatch: 'full' },
  { path: 'firstview', component: FirstviewComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'hostels', component: HostelsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}