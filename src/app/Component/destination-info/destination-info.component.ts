import {Component, Input, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';
import {DataModel} from '../../Model/data.model';
import {DataService} from '../../Service/data.service';

@Component({
  selector: 'app-destination-info',
  templateUrl: './destination-info.component.html',
  styleUrls: ['./destination-info.component.css']
})
export class DestinationInfoComponent implements OnInit {
  data: DataModel;
  today: String;
  time: String;
  am_icon: String;
  destination: String;
  Vibe: String;
  constructor(private dataService: DataService) {
    // this.time = formatDate(this.today, 'h:mm', 'en-US');
    // this.am_icon = formatDate(this.today, 'a', 'en-US');
  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => {
        this.data = <DataModel>data;
        this.dataParse();
      });
  }

  dataParse() {
    this.destination = this.data.trip.dropoff_location.name;
    this.Vibe = this.data.vibe.name;
    this.today = this.data.trip.estimated_arrival;
    this.TimeParse(this.today);
  }

  TimeParse(today: String) {
    const date = new Date(today.toString());
    this.time = date.getHours().toLocaleString() + ':' + date.getMinutes().toLocaleString();
    if (date.getHours() > 12) {
      this.am_icon = 'PM';
    } else {
      this.am_icon = 'AM';
    }
  }
}
