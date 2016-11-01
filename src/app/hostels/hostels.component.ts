import { Component } from '@angular/core';
import {HOSTELS} from './mock-hostels';

@Component({
  selector: 'hostels',
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.css']
})
export class HostelsComponent {

  hostels=HOSTELS;


}
