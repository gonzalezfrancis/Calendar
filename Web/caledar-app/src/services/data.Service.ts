import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataService{
    private messageSource = new Subject<String>();
    currentMessage = this.messageSource.asObservable();

    private appoitnmentSelected = new Subject<Appointment>();
    currentAppointmentSelected = this.appoitnmentSelected.asObservable();

    private refreshCalendarSubject = new Subject<String>();
    currentrefreshCalendarSubject = this.refreshCalendarSubject.asObservable();
    constructor(){
    }

    changeMessage(message: String){
        this.messageSource.next(message);
    }

    changeAppointment(message: Appointment){
        this.appoitnmentSelected.next(message);
    }

    notifyRefreshCalendar(message: String){
        this.refreshCalendarSubject.next("");
    }
}

export class Appointment{
    summary: String;
    Id: number;
    location: String;
    startDate: Date;
    endDate: Date;
  }