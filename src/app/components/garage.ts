import { ClassFactory } from "../common/class-factory";
import { Vehicle } from "../gome-objects/vehicle/vehicle";

export class Garage {
    static instance: Garage;
    vehicles: any[] = [];

    static init(){
        Garage.instance = new Garage();
    }

    registerVehicles(...vehicles: any[]){
        for (const v of vehicles){
            this.vehicles.push(v);
        }
    }

    getRandVehicle(): Vehicle {
        const numVehicles = this.vehicles.length;
        const i = Math.floor(Math.random() * numVehicles);
        return ClassFactory(Garage.instance.vehicles[i]) as Vehicle;
    }

    destroy(){
        this.vehicles = [];
    }
}