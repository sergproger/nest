import { Component, Input, OnInit } from '@angular/core';

import { Contact } from './contact';

@Component({
  selector: 'contact',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {

  @Input() contact: Contact;

}
