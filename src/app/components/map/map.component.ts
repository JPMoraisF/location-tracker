import { Component, OnDestroy, OnInit } from '@angular/core';
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
  public mapCenter: Leaflet.LatLng = new Leaflet.LatLng(-15.79, -47.88)
  public tileLayer: Leaflet.TileLayer = new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  } as Leaflet.TileLayerOptions)
  public mapZoom = 12;
  private markerList: Leaflet.Marker[] = [];
  private locations: LocationObject[] =  [ ];

  constructor(public locationService: LocationsService) {
  }

  ngOnInit(): void {
    this.locationSub = this.locationService.getLocationSubscriber()
    .subscribe((locations) => {
      this.locations = locations;
      this.markerList = this.locations.map((location) => {
        return new Leaflet.Marker(Leaflet.latLng(location.capitalInfo.latlng[0], location.capitalInfo.latlng[1]), {
          icon: new Leaflet.Icon({
            iconSize: [50, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/pngegg.png',
          }),
        }).addEventListener('click', (event) => {
          console.log('clicked marker name '+ location.name.common)
        })
      })
    });
  }

  ngOnDestroy(): void {
    this.locationSub.unsubscribe();
  }

  removeLocation(){
    this.locationService.removeLocation(4);
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
    this.markerList.push(new Leaflet.Marker(Leaflet.latLng(newLocation.capitalInfo.latlng[0], newLocation.capitalInfo.latlng[1]), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/pngegg.png',
      }),
    }).addEventListener('click', (event) => {
      console.log('clicked marker')
    }));
  }

  getLayers = (): Leaflet.Layer[] => {
    return [
     this.tileLayer,
      ...this.markerList,
    ] as Leaflet.Layer[];
  };

  options: Leaflet.MapOptions = {
    zoom: 12,
    center: new Leaflet.LatLng(-8.1246097, -34.9020686),
  };
}
