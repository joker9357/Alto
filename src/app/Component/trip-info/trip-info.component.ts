import {Component, Input, OnInit} from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.css']
})
export class TripInfoComponent implements OnInit {

  @Input() today = new Date();
  time = '';
  am_icon = '';
  @Input() destination = '';
  LowestMoney = 65;
  HighestMoney = 75;
  LowestPeople = 1;
  HighestPeople = 5;
  Payment = 'Amex01';
  Address = '449 Flora St.';
  City = 'Dallas';
  State = 'Texas';
  Zipcode = '75201';
  User_Destination = 'DFW International Airport American Airlines Terminal E';
  Destination_City = 'Irving';
  Destination_State = 'Texas';
  Destination_Zipcode = '75261';
  User_Comment = 'Can you drop me off at AA International Bag Drop please?';
  constructor() {
    this.time = formatDate(this.today, 'h:mm', 'en-US');
    this.am_icon = formatDate(this.today, 'a', 'en-US');
  }


  ngOnInit() {
  }

}
