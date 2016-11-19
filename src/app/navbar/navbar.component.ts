import { Component, EventEmitter } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";

declare var $: any;

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    modalActions = new EventEmitter<string | MaterializeAction>();
    openModal() {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    }

    ngAfterViewInit() {
        //sivenav
        $(".button-collapse").sideNav({draggable: false});

        $('.collapsible').collapsible({
            accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
    }

    collapseButtonClick() {
        function timeDalay() {
            $('#sidenav-overlay').css('z-index', '966');
            }
        setTimeout(timeDalay, 50);
        }
    }

