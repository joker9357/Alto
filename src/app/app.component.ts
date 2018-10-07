import {Component, ViewChild} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  today = new Date();
  destination = 'Estimated arrived at DFW Int\'I Airport - Terminal E';
  @ViewChild('myCarousel') myCarousel: NgbCarousel;

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.pauseOnHover = false;
  }

  ngOnInit() {

  }

}

