import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from './Service/data.service';
import {DataModel} from './Model/data.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit() {

  }

}

