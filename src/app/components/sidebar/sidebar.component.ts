import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationsService } from 'src/app/locations.service';
import { LocationObject } from 'src/app/models/LocationObject';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy{
  private locationSub: Subscription = new Subscription();
  panelOpenState = false;
  locations: LocationObject[] = [];

  constructor(public locationService: LocationsService) {
    
  }
  onDeleteLocation(location: LocationObject){
    this.locationService.removeLocation(location.id);
  }

  onFocusLocation(location: LocationObject){
    this.locationService.centerMap(location.capitalInfo.latlng[0], location.capitalInfo.latlng[1]);
  }

  ngOnDestroy(): void {
    this.locationSub.unsubscribe();
  }

  ngOnInit() {
    this.locationSub = this.locationService.getLocationSubscriber()
    .subscribe((locations) => {
      this.locations = locations
    });
    this.locationService.getLocations();
  }
}
