import { Injectable } from "@angular/core";
import { LocationObject } from "./models/LocationObject";

import { HttpClient } from '@angular/common/http'
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class LocationsService {
    mapCenterSub = new Subject<{lat: number, lon: number}>();
    locationSub = new Subject<LocationObject[]>();

    private locationsArray: LocationObject[] = [
        { capitalInfo: {latlng: [-8.1252745, -34.9022615]}, name: {common:"Point 1"}, id : 1 },
        { capitalInfo: {latlng: [-8.1196817, -34.9048434]}, name: {common:"Point 2"}, id : 2 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
        { capitalInfo: {latlng: [-8.1184174, -34.8934826]}, name: {common:"Point 3"}, id : 3 },
    ];

    constructor(private httpClient: HttpClient) { }
    
    getLocationSubscriber() {
        return this.locationSub.asObservable();
    }

    getMapCenterSubscriber() {
        return this.mapCenterSub.asObservable();
    }

    addLocation(newLocation: LocationObject){
        this.locationsArray.push(newLocation);
        this.locationSub.next([...this.locationsArray]);
    }

    removeLocation(id: number){
        this.locationsArray = this.locationsArray.filter(elem => elem.id != id);
        this.locationSub.next([...this.locationsArray]);
    }

    getLocations(): LocationObject[] {
        this.locationSub.next([...this.locationsArray]);
        return this.locationsArray
    }

    centerMap(lat: number, lon: number){
        this.mapCenterSub.next({lat: lat, lon: lon});
    }
}