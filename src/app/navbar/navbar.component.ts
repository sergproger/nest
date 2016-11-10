import { Component,EventEmitter } from '@angular/core';
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

   modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
 }
//  $(document).ready(function(){
//     $('ul.tabs').tabs();
//   });
        