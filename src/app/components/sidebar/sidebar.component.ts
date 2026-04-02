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
  searchTerm: string = '';

  constructor(public locationService: LocationsService) {
    
  }

  get filteredLocations() {
    return this.locations.filter(location =>
      location.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onDeleteLocation(location: LocationObject){
    this.locationService.removeLocation(location.id);
  }

  onFocusLocation(location: LocationObject){
    this.locationService.centerMap(location.capitalInfo.latlng[0], location.capitalInfo.latlng[1]);
  }

  onSearchInputChange() {
    this.filteredLocations;
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
