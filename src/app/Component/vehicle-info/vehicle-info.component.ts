import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {
  Vehicle = 'Alto 09';
  Color = 'Pure White';
  Model = '2019 Volkswagen Atlas';
  constructor() { }

  ngOnInit() {
  }

}
