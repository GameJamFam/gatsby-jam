import { probability } from '@/app/common/probability';
import { Texture, Ticker } from 'pixi.js';
import { Vehicle } from '../../gome-objects/vehicle/vehicle'
import { Garage } from '../garage';
import { Lane } from './lane'

export enum TrafficDensity {
    NONE,
    HIGH,
    MEDIUM,
    LOW
}

export enum TrafficDirection {
    RIGHT,
    LEFT
}

export class TrafficLane extends Lane {

    _direction: TrafficDirection;
    _density: TrafficDensity;
    vehicles: Vehicle[] = [];
    spacer: number = 0;

    constructor(texture: Texture, width: number, height: number){
        super(texture, width, height);
        this._density = TrafficDensity.LOW;

        this.on('added', () => {
            this.play();
        })
    }

    set direction(d: TrafficDirection){
        this._direction = d;
    }

    set density(d: TrafficDensity){
        this._density = d;
    }

    get density(){
        return this._density;
    }

    play(){
        Ticker.shared.add(this.tick, this);
    }

    addVehicle(){
        const vehicle = Garage.instance.getRandVehicle();
        vehicle.direction = this._direction;
        this.addChild(vehicle.sprite)
    }

    tick(delta: number){
        this.spacer += 1;
        if (this.spacer > (32 * this.density)){
            if (probability(this.density/100)){
                console.info('loading vehicle')
                this.addVehicle();
                this.spacer = 0;
            }
        }
    }

}