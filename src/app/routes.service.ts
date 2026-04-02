import { Injectable } from "@angular/core";
import { RouteObject } from "./models/RouteObject";

@Injectable({ providedIn: 'root' })
export class RoutesService {
    private routesArray: RouteObject[] = [
        {
            id: 1, name: "Home to work", waypoints:
                [
                    { id: 1, name: { common: "Home" }, capitalInfo: { latlng: [-8.1252745 - 8.1252745, -34.9022615] } },
                ]
        }
    ]
}