import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CalendarModule, DateAdapter } from 'angular-calendar';
//import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppComponent } from './app.component';
import {CalendarComponent} from "ap-angular2-fullcalendar/src/calendar/calendar";
import { FormsModule } from '@angular/forms';
import { MyCalendarComponentComponent } from './components/my-calendar-component/my-calendar-component.component';
import * as $ from 'jquery';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { DataService } from '../services/data.Service';
import { ApiService } from '../services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppointmentComponentComponent } from './components/appointment-component/appointment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCalendarComponentComponent,
    CalendarComponent,
    ListComponentComponent,
    AppointmentComponentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    ApiService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
