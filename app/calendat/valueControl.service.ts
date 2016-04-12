import {Injectable} from "angular2/core";

@Injectable()
export class ValueControlService {
    
    public dayNames: string[];
    
    public startYear: number;
    public endYear: number;
    
    public activeYear: number;
    public activeMonth: number;
    public activeDay: number;
    
    public viewType: string;
}