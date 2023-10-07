import { Component } from '@angular/core';

import * as Leaflet from 'leaflet';
import { LocationsService } from './locations.service';
import { LocationObject } from './models/LocationObject';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPwa';
  location!: LocationObject;

  constructor(public locationService: LocationsService) {
  }

  onMarkerClicked(event: LocationObject){
    this.location = event;
  }
}
