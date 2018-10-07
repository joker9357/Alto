import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.css']
})
export class DriverInfoComponent implements OnInit {
  Driver_Name = 'Steph';
  Introduction = 'Steph Festicuulma is a graduate of Parsons New School in New York and fluent in Portugeuse, Spanish and Engulish. Steph has been driving with Alto since 2018';
  constructor() { }

  ngOnInit() {
  }

}
