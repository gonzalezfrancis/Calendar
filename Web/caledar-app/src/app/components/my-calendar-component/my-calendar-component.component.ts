import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import {CalendarComponent } from 'ap-angular2-fullcalendar';
import * as $ from 'jquery';
import swal from "sweetalert2";
import * as moment from "moment";
import { ApiService } from '../../../services/api.service';
import { DataService } from '../../../services/data.Service';

@Component({
  selector: 'app-my-calendar-component',
  templateUrl: './my-calendar-component.component.html',
  styleUrls: ['./my-calendar-component.component.css']
})
export class MyCalendarComponentComponent implements OnInit {
  calendarOptions: any = {};
  calendarEvents =  [];
  private refreshCalendarSubcription: Subscription;
  constructor(private apiService: ApiService, private dataService: DataService) { }

  @Output() selectedDateEvent = new EventEmitter<String>();
  ngOnInit() {
    var me = this;
    this.refreshCalendarSubcription = this.dataService.currentrefreshCalendarSubject.subscribe(()=>{
      me.refreshCalendarAfterGet();
    });
    this.apiService.get('appointments/getall').then(data => {
      this.calendarEvents = data;
      this.refreshCalendar();
    });
    
    this.calendarOptions = {
      aspectRatio: 5,
      fixedWeekCount : false,
      defaultDate: '2018-11-12',
      editable: true,
      events: [],
      dayClick: function(date, jsEvent, view){
        me.selectedDateEvent.emit(date.format());
      },
      eventClick : function(calEvent, jsEvent, view){
        
        me.openSelectedEvent(calEvent.Id);
      }
    };
   
  }

  refreshCalendar(){
    this.calendarOptions.events = [];
    for(var x =0; x < this.calendarEvents.length; x++){
      var event = new Event();
      event.Id = this.calendarEvents[x].id;
      event.title = this.calendarEvents[x].summary;
      event.start = this.calendarEvents[x].startDate;
      event.end = this.calendarEvents[x].endDate;
      this.calendarOptions.events.push(event);
    }
    var calendar = $('#mycal');
     calendar.fullCalendar('removeEvents');
     calendar.fullCalendar('removeEventSource',this.calendarOptions.events);
     calendar.fullCalendar('addEventSource',this.calendarOptions.events);
     calendar.fullCalendar('refetchEvents');
  }

  refreshCalendarAfterGet(){
    this.apiService.get('appointments/getall').then(data => {
      this.calendarEvents = data;
      this.calendarOptions.events = [];
      for(var x =0; x < this.calendarEvents.length; x++){
        var event = new Event();
        event.Id = this.calendarEvents[x].id;
        event.title = this.calendarEvents[x].summary;
        event.start = this.calendarEvents[x].startDate;
        event.end = this.calendarEvents[x].endDate;
        this.calendarOptions.events.push(event);
      }
     var calendar = $('#mycal');
     calendar.fullCalendar('removeEvents');
     calendar.fullCalendar('removeEventSource',this.calendarOptions.events);
     calendar.fullCalendar('addEventSource',this.calendarOptions.events);
     calendar.fullCalendar('refetchEvents');
  });
    
  }

  openSelectedEvent(id){
    this.apiService.get('appointments/'+id).then(data => {
      var sweetAlertHtml = '<label>Summary</label>'+
                         '<p>'+ data.summary+'</p>'+
                         '<br><br>'+
                         '<label>Location</label>'+
                         '<p>'+data.location+'</p>'+
                         '<label>Start Date</label>'+
                         '<p>'+data.startDate+'</p>'+
                         '<label>End Date</label>'+
                         '<p>'+data.endDate+'</p>';
      swal({
        type:'info',
        title: 'Appointment Details',
        width: 600,
        html:sweetAlertHtml
      });
      
    });
  }
  onCalendarInit($event) {
    
  }

  ngAfterViewInit(){
    
  }
   

}

export class Event{
  title:string;
  start:string;
  end:string;
  Id:string;
}
