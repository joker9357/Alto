import { Component, OnInit } from '@angular/core';
import {BasebarService} from '../../Service/basebar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private baseBarService: BasebarService) { }

  open() {
    this.baseBarService.Open();
  }

  close() {
    this.baseBarService.Close();
  }

  ngOnInit() {

  }

}
