import { Component } from '@angular/core';
import { LocationsService } from '../../locations.service';

import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  title = 'AngularPwa';

  constructor(public locationService: LocationsService) {
  }

  addLocation(){
    this.locationService.addLocation();
  }

  onClick(){
    console.log('clicked')
    this.locationService.getSACapitals();
  }

  // getMarkers = (): Leaflet.Marker[] => {
  //   const markers = this.locationService.getLocations();
  
  //   return markers.map((marker) => {
  //     return new Leaflet.Marker(
  //       new Leaflet.LatLng(marker.Latitude, marker.Longitude),
  //       {
  //         icon: new Leaflet.Icon({
  //           iconSize: [50, 41],
  //           iconAnchor: [13, 41],
  //           iconUrl: 'assets/pngegg.png',
  //         }),
  //         title: marker.name.common,
  //         riseOnHover: true,
  //       } as Leaflet.MarkerOptions
  //     );
  //   });
  // };

  getLayers = (): Leaflet.Layer[] => {
    return [
      new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      } as Leaflet.TileLayerOptions),
      // ...this.getMarkers(),
    ] as Leaflet.Layer[];
  };

  options: Leaflet.MapOptions = {
    layers: this.getLayers(),
    zoom: 12,
    center: new Leaflet.LatLng(-8.1246097, -34.9020686)
  };
}
