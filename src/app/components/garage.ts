import { Vehicle } from "../gome-objects/vehicle/vehicle";

export class Garage {
    vehicles: Vehicle[];

    registerVehicles(...vehicles: Vehicle[]){
        for (const v of vehicles){
            this.vehicles.push(v);
        }
    }

    getRandVehicle(){
        const numVehicles = this.vehicles.length;
        const i = Math.floor(Math.random() * numVehicles);
    }
}