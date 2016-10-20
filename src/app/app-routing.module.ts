import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstviewComponent } from './firstview/firstview.component';
import { PageNotFoundComponent } from './404error/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/firstview', pathMatch: 'full' },
  { path: 'firstview', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}