import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    actions = new EventEmitter<string>();
  closeModel() {
    this.actions.emit("closeModal");
  }
 }
//  $(document).ready(function(){
//     $('ul.tabs').tabs();
//   });
        