import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { LocationsService } from '../../locations.service';

import * as Leaflet from 'leaflet';
import { Subscription } from 'rxjs';
import { LocationObject } from 'src/app/models/LocationObject';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  private locationSub: Subscription = new Subscription();
  private mapCenterSub: Subscription = new Subscription();
  public tileLayer: Leaflet.TileLayer = new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  } as Leaflet.TileLayerOptions)
  public mapZoom = 15;
  private markerList: Leaflet.Marker[] = [];
  public mapCenter:  Leaflet.LatLng = new Leaflet.LatLng(-15.79, -47.88);

  constructor(public locationService: LocationsService) {
  }

  ngOnInit(): void {
    this.locationSub = this.locationService.getLocationSubscriber()
    .subscribe((locations) => {
      this.markerList = locations.map((location) => {
        return new Leaflet.Marker(Leaflet.latLng(location.capitalInfo.latlng[0], location.capitalInfo.latlng[1]), {
          icon: new Leaflet.Icon({
            iconSize: [50, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/pngegg.png',
          }),
        });
      })
    });
    this.mapCenterSub = this.locationService.getMapCenterSubscriber()
    .subscribe((mapCenter) => {
      return this.mapCenter = new Leaflet.LatLng(mapCenter.lat, mapCenter.lon)
    })
  }

  ngOnDestroy(): void {
    this.locationSub.unsubscribe();
    this.mapCenterSub.unsubscribe();
  }

  addLocation(){
    var newLocation: LocationObject = {
      name: {
        common: "Point 4",
      },
      capitalInfo: {
        latlng: [-8.1222955, -34.8940244]
      },
      id: 4
    }
    this.locationService.addLocation(newLocation);
  }

  getLayers = (): Leaflet.Layer[] => {
    return [
     this.tileLayer,
      ...this.markerList,
    ] as Leaflet.Layer[];
  };
}
