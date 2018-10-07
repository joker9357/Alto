import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TripInfoComponent } from '../../Component/trip-info/trip-info.component';
import { DriverInfoComponent } from '../../Component/driver-info/driver-info.component';
import { VehicleInfoComponent } from '../../Component/vehicle-info/vehicle-info.component';
import { DestinationInfoComponent } from '../../Component/destination-info/destination-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/TripInfo', pathMatch: 'full' },
  { path: 'TripInfo', component: TripInfoComponent },
  { path: 'DriverInfo', component: DriverInfoComponent },
  { path: 'VehicleInfo', component: VehicleInfoComponent },
  { path: 'DestinationInfo', component: DestinationInfoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]

})
export class RouteModule { }
