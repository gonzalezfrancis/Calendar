import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DataService } from '../services/data.Service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app';
  date: String;

  constructor(private dataService: DataService){

  }
  ngOnInit(): void {
    
  }

  eventUpdateDate($event){
    this.dataService.changeMessage($event);
    this.date = $event;
  }

  refreshCalendarEvent(){
    this.dataService.notifyRefreshCalendar("");
  }
}
