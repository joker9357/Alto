import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base-bar',
  templateUrl: './base-bar.component.html',
  styleUrls: ['./base-bar.component.css']
})
export class BaseBarComponent implements OnInit {
  public href = '';

  constructor(private router: Router) { }

  private imagePath = '../../../assets/image';

  private destination = 'DFW Int\'I Airport';
  private estimate_time = '5:39 pm';

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);

  }

}
