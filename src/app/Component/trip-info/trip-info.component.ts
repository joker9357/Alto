import {Component, Input, OnInit} from '@angular/core';
import {formatDate } from '@angular/common';
import {DataService} from '../../Service/data.service';
import {TripModel} from '../../Model/Trip.model';
import {DataModel} from '../../Model/data.model';
import {t} from '@angular/core/src/render3';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.css']
})
export class TripInfoComponent implements OnInit {
  data: DataModel;
  trip_info: TripModel;
  // today = Date;
  today: String;
  time: String;
  am_icon: String;
  destination: String;
  LowestMoney: number;
  HighestMoney: number;
  LowestPeople: number;
  HighestPeople: number;
  Payment: String;
  Address: String;
  City: String;
  State: String;
  Zipcode: String;
  User_Destination: String;
  Destination_City: String;
  Destination_State: String;
  Destination_Zipcode: String;
  User_Comment: String;
  constructor(private dataService: DataService) {
    // this.time = formatDate(this.today, 'h:mm', 'en-US');
    // this.am_icon = formatDate(this.today, 'a', 'en-US');
  }


  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => {
        this.data = <DataModel>data;
        this.trip_info = this.data.trip;
        this.dataParse(this.data);
      });
  }
  dataParse(data: DataModel) {
    const trip_info = data.trip;
    this.LowestMoney = trip_info.estimated_fare_min / 100;
    this.HighestMoney = trip_info.estimated_fare_max / 100;
    this.LowestPeople = trip_info.passengers_min;
    this.HighestPeople = trip_info.passengers_max;
    this.Payment = trip_info.payment;
    this.destination = trip_info.dropoff_location.name;
    this.Address = trip_info.pickup_location.street_line1 + ' ' + trip_info.pickup_location.street_line2;
    this.City = trip_info.pickup_location.city;
    this.State = trip_info.pickup_location.state;
    this.Zipcode = trip_info.pickup_location.zipcode;
    this.User_Destination = trip_info.dropoff_location.street_line1;
    this.Destination_City = trip_info.dropoff_location.city;
    this.Destination_State = trip_info.dropoff_location.state;
    this.Destination_Zipcode = trip_info.dropoff_location.zipcode;
    this.User_Comment = trip_info.notes;
    this.today = trip_info.estimated_arrival.toString();
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
