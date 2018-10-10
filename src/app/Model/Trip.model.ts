import {LocationModel} from './location.model';

export class TripModel {
  public estimated_arrival: String;
  public estimated_fare_min: number;
  public estimated_fare_max: number;
  public passengers_min: number;
  public passengers_max: number;
  public payment: String;
  public dropoff_location: LocationModel;
  public pickup_location: LocationModel;
  public notes: String;

}
