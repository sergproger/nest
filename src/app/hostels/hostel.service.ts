import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hostel } from './hostel/hostel';
import { HOSTELS } from './mock-hostels';

@Injectable()
export class HostelService {
    getHostels(): Promise<Hostel[]> {
        return Promise.resolve(HOSTELS);
    }
}