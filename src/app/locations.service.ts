import { Injectable } from "@angular/core";
import { LocationObject } from "./models/LocationObject";

import { HttpClient } from '@angular/common/http'
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class LocationsService {

    locationSub = new Subject<LocationObject[]>();

    private locationsArray: LocationObject[] = [
        { capitalInfo: {latlng: [-8.1252745, -34.9022615]}, name: {common:"Casa"} },
        { capitalInfo: {latlng: [-8.1196817, -34.9048434]}, name: {common:"Shopping"} },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Praia"} },
    ];

    constructor(private httpClient: HttpClient) { }
    
    getLocationSubscriber() {
        return this.locationSub.asObservable();
    }

    getLocations(): LocationObject[] {
        this.locationSub.next([...this.locationsArray]);
        return this.locationsArray
    }
}