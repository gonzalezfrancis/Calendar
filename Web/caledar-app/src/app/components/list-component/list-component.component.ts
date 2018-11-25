import { Component, OnInit, Input,NgZone, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data.Service';
import { ApiService } from '../../../services/api.service';
import swal from "sweetalert2";
import * as $ from 'jquery';


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  @Output() refreshCalendarEvent = new EventEmitter<String>();

  appointments:any; 
  date:any = new Date();

  constructor(private zone:NgZone,private dataService: DataService, private apiService: ApiService) {
   }
  

  ngOnInit() {
    this.updateList();
    this.dataService.currentMessage.subscribe(message => {
      this.date = message;
      this.updateList(); 
    });


  }

  public trackItem(index: number, item: Appointment) {
    return item.Id;
  }

  updateList(){
    this.appointments = [];
    this.apiService.post("appointments/getbydate",{value: this.date}).then(data => {
      this.zone.run(() => {
        this.appointments = data;
      });
      
    });
  }
  onSelect(item){
    var sweetAlertHtml = '<label>Summary</label>'+
                         '<p>'+ item.summary+'</p>'+
                         '<br><br>'+
                         '<label>Location</label>'+
                         '<p>'+item.location+'</p>'+
                         '<label>Start Date</label>'+
                         '<p>'+item.startDate+'</p>'+
                         '<label>End Date</label>'+
                         '<p>'+item.endDate+'</p>';

      swal({
        type:'info',
        title: 'Appointment Details',
        width: 600,
        html:sweetAlertHtml
        
      });
  }

  onSelectEdit(item){
    console.log(item);
  }

  onSelectDelete(item){
    console.log(item);
    var me = this;
    var sweetAlertHtml = '<p>'+ item.summary+'</p>'+
                         '<br><br>';
    swal({
      type:'error',
      title: 'Are you sure you want to delete?',
      width: 600,
      showCancelButton:true,
      html: sweetAlertHtml
    }).then(input =>{
      me.apiService.get('appointments/remove/'+item.id).then(data => {
        me.updateList()
        me.refreshCalendarEvent.emit("");
      });
    });
    
  }
}

export class Appointment{
  summary: String;
  Id: number;
  location: String;
  startDate: Date;
  endDate: Date;
}
