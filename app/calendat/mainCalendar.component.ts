import {Component} from "angular2/core";
import {ValueControlService} from "./valueControl.service";

@Component({
    selector: "l-calendar",
    directives: [],
    providers: [ValueControlService],
    template: `
        <div class="day" *ngFor="#dn of dayNames">{{dn}}</div>
    `,
    styles: [`
        .day {
            float: left;
        }
    `]
})
export class MainCalendarComponent { 
    constructor(
        private _valueControl: ValueControlService
    ) {

        let startingYear = new Date().getFullYear(),
            endingYear = 2025,
            temp = {};

        for(let y = startingYear; y <= endingYear; y++) {
            temp[y] = {};

            for(let m = 0; m < 12; m++) {
                let days = new Date(y, m, 0).getDate();
                temp[y][m] = [];
                for(let d = 0; d <= days; d++) temp[y][m].push({[d]: this.dayNames[new Date(y, m, d).getDay()]});
            }

        }

        this.dateData = temp;
        console.log(this.dateData);
    }

    public dateData: any = {};
    public dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
}