import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { DataService } from '../../../services/data.Service';

@Component({
  selector: 'app-appointment-component',
  templateUrl: './appointment-component.component.html',
  styleUrls: ['./appointment-component.component.css']
})
export class AppointmentComponentComponent implements OnInit {

  appointment: Object = {
                          summary:"",
                          location:"",
                          startDate:"",
                          endDate:"" 
                        };
  constructor(private apiService: ApiService, private dataService: DataService) { }

  ngOnInit() {
  }

  addAppointment(){
    this.apiService.post('appointments/addAppointment',this.appointment).then(data => {
      console.log(data);
      this.dataService.notifyRefreshCalendar("");
    });
  }

}
