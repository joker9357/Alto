import { Component, OnInit } from '@angular/core';
import {DataModel} from '../../Model/data.model';
import {DataService} from '../../Service/data.service';
import {DriverModel} from '../../Model/Driver.model';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.css']
})
export class DriverInfoComponent implements OnInit {
  Driver_Name: String;
  Introduction: String;
  data: DataModel;
  driver_info: DriverModel;
  image_url: String;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => {
        this.data = <DataModel>data;
        this.driver_info = this.data.driver;
        this.dataParse(this.data);
      });
  }
  dataParse(data: DataModel) {
    this.Driver_Name = this.driver_info.name;
    this.Introduction = this.driver_info.bio;
    this.image_url = this.driver_info.image;
  }

}
