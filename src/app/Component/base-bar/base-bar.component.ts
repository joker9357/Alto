import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BasebarService} from '../../Service/basebar.service';

@Component({
  selector: 'app-base-bar',
  templateUrl: './base-bar.component.html',
  styleUrls: ['./base-bar.component.css']
})
export class BaseBarComponent implements OnInit {

  constructor(private basebarService: BasebarService) { }

  private imagePath = '../../../assets/image';
  private isOpen = false;
  private destination = 'DFW Int\'I Airport';
  private estimate_time = '5:39 pm';

  ngOnInit() {
    this.basebarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
      console.log(this.isOpen);
    });

  }

}
