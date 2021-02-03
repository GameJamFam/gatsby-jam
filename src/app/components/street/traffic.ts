import { ClassFactory } from "@/app/common/class-factory";
import { Vehicle } from "@/app/gome-objects/vehicle/vehicle";
import { Container } from "pixi.js";
import { Garage } from "../garage";


export enum TrafficDensity {
    NONE,
    LOW,
    MEDIUM,
    HIGH
}

export enum TrafficDirection {
    RIGHT,
    LEFT
}

export class Traffic extends Container{
    
    garage: any[];
    vehicles: Vehicle[];
    density: TrafficDensity;
    direction: TrafficDirection;

    constructor(density: TrafficDensity = TrafficDensity.LOW, direction: TrafficDirection = TrafficDirection.RIGHT){
        super();
        this.density = density;
        this.direction = direction;
    }

    start(){
        this.vehicles = [this.getRandVehicle()]
        for (let v of this.vehicles){
            this.addChild(v.sprite);
        }
    }

    getRandVehicle(): Vehicle{
        const i = Math.floor(Math.random() * this.garage.length);
        let vehicle = ClassFactory(Garage.instance.vehicles[i]) as Vehicle;

        vehicle.x = ((32 * 3)/this.density);
        if (this.direction == TrafficDirection.LEFT){
            vehicle.faceLeft();
        }
        
        return vehicle;
    }

    tick(delta: number){
    }

}