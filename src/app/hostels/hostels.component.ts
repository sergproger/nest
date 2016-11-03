import { Component, OnInit  } from '@angular/core';

import { Hostel } from './hostel/hostel';
import { HostelService } from './hostel.service';

@Component({
  selector: 'hostels',
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.css'],
  providers: [HostelService]
})
export class HostelsComponent implements OnInit{

  hostels: Hostel[];
  constructor(private hostelService: HostelService) { }

  getHostels(): void {
    this.hostelService.getHostels().then(hostels => this.hostels = hostels);
  }

  ngOnInit(): void {
    this.getHostels();
  }
}
