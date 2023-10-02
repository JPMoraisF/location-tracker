import { Component, OnDestroy, OnInit } from '@angular/core';
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
  locations: LocationObject[] = [];


  constructor(public locationService: LocationsService) {
  }
  ngOnDestroy(): void {
    this.locationSub.unsubscribe();
  }

  onClickLoad(){
    this.locationService.getLocations();
  }

  ngOnInit() {
    this.locationSub = this.locationService.getLocationSubscriber()
    .subscribe((locations) => {
      this.locations = locations
    });
  }
}
