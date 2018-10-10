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

  public imagePath = '../../../assets/image';
  public isOpen = false;
  public destination = 'DFW Int\'I Airport';
  public estimate_time = '5:39 pm';

  ngOnInit() {
    this.basebarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
      console.log(this.isOpen);
    });

  }

}
