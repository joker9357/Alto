import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { BaseBarComponent } from './Component/base-bar/base-bar.component';
import { MaterialModule } from './Module/Material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TripInfoComponent } from './Component/trip-info/trip-info.component';
import { DriverInfoComponent } from './Component/driver-info/driver-info.component';
import { VehicleInfoComponent } from './Component/vehicle-info/vehicle-info.component';
import { DestinationInfoComponent } from './Component/destination-info/destination-info.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { RouteModule } from './Module/route/route.module';


@NgModule({
  declarations: [
    AppComponent,
    BaseBarComponent,
    TripInfoComponent,
    DriverInfoComponent,
    VehicleInfoComponent,
    DestinationInfoComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
