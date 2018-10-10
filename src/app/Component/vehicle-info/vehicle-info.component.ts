import { Component, OnInit } from '@angular/core';
import {DataModel} from '../../Model/data.model';
import {DataService} from '../../Service/data.service';
import {VehicleModel} from '../../Model/Vehicle.model';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {
  Vehicle: String;
  Color: String;
  Model: String;
  data: DataModel;
  vehicle_info: VehicleModel;
  image_url: String;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => {
        this.data = <DataModel>data;
        this.vehicle_info = this.data.vehicle;
        this.dataParse();
      });
  }
  dataParse() {
    this.Vehicle = this.vehicle_info.license;
    this.Color = this.vehicle_info.color;
    this.Model = this.vehicle_info.make;
    this.image_url = this.vehicle_info.image;
  }

}
