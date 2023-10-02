import { Component } from '@angular/core';

import * as Leaflet from 'leaflet';
import { LocationsService } from './locations.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPwa';

  constructor(public locationService: LocationsService) {
  }
}
