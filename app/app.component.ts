import {Component} from 'angular2/core';
import {MainCalendarComponent} from "./calendat/mainCalendar.component";

@Component({
    selector: 'app',
    directives: [MainCalendarComponent],
    template: '<l-calendar></l-calendar>'
})
export class AppComponent { }