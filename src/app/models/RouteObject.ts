import { LocationObject } from "./LocationObject";

export interface RouteObject {
    name: string,
    id: number,
    waypoints: [LocationObject]
}