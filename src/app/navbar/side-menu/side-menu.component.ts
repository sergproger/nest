import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  AboutClick() {
    $('.button-collapse').sideNav('hide');
  }
  HostelsClick(){
    $('.button-collapse').sideNav('hide');
  }
  ContactsClick(){
    $('.button-collapse').sideNav('hide');
  }
}
