import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from './contact-detail/contact';
import { CONTACTS } from './mock-contacts';

@Injectable()
export class ContactService {
    getContacts(): Promise<Contact[]> {
        return Promise.resolve(CONTACTS);
    }
}