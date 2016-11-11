import { Component,OnInit } from '@angular/core';

import { Contact } from './contact-detail/contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit{
  contacts: Contact[];
  constructor(private contactService: ContactService) { }

  getContacts(): void {
    this.contactService.getContacts().then(contacts => this.contacts = contacts);
  }

  ngOnInit(): void {
    this.getContacts();
  }

}
