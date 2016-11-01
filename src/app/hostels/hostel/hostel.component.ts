import { Component, Input, OnInit } from '@angular/core';

import { Hostel } from './hostel';

@Component({
  selector: 'my-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.css']
})
export class HostelComponent { 

  @Input() hostel:Hostel;

}
