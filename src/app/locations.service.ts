import { Injectable } from "@angular/core";
import { LocationObject } from "./models/LocationObject";

import { HttpClient } from '@angular/common/http'
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class LocationsService {

    locationSub = new Subject<LocationObject[]>();
    private locationsArray: LocationObject[] = [];

    // private locationsArray: LocationObject[] = [
    //     { Latitude: -8.1252745, Longitude: -34.9022615, title: "Casa"},
    //     { Latitude: -8.1196817, Longitude: -34.9048434, title: "Shopping"},
    //     { Latitude: -8.1184174, Longitude: -34.8934826, title: "Praia"},
    //     { Latitude: -15.79, Longitude: -47.88, title: "Capital"},
    // ];

    constructor(private httpClient: HttpClient) { }
    
    getLocationSubscriber() {
        return this.locationSub.asObservable();
    }

    addLocation() {
        const newLocation: LocationObject =  {
            capitalInfo: {
                latlng: [-8.1276114, -34.9039503]
            },
            name: {
                common: "New Location"
            }
        }
        this.locationsArray.push(newLocation);
        this.locationSub.next([...this.locationsArray])
        console.log('added');
        
    }

    getLocations(): LocationObject[] {
        return this.locationsArray;
    }

    getSACapitals() {
        // this.httpClient.get<{ capitalInfo: { latlng: number[]}}[]>('https://restcountries.com/v3.1/capital/brasil')
        this.httpClient.get<LocationObject[]>('https://restcountries.com/v3.1/capital/brasil')
          .subscribe((response) => {
            console.log(response)
            this.locationsArray.push(...response)
            this.locationSub.next([...this.locationsArray]);
          });
      }
      
}