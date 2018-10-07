import {Component, Input, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-destination-info',
  templateUrl: './destination-info.component.html',
  styleUrls: ['./destination-info.component.css']
})
export class DestinationInfoComponent implements OnInit {
  @Input() today = new Date();
  time = '';
  am_icon = '';
  @Input() destination = '';
  Vibe = 'Vaporwave Beats';
  constructor() {
    this.time = formatDate(this.today, 'h:mm', 'en-US');
    this.am_icon = formatDate(this.today, 'a', 'en-US');
  }

  ngOnInit() {
  }

}
