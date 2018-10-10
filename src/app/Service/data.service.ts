import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DataModel} from '../Model/data.model';
import {TripModel} from '../Model/Trip.model';
import {Observable} from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'http://localhost:4200/assets/mission.json';
  public data: DataModel;
  public trip_info: DataModel;
  constructor(private http: HttpClient) { }

  getData (): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  getTrip () {
    this.http.get(this.dataUrl)
      .subscribe(data => {
        this.data = <DataModel>data;
      });
  }
}
