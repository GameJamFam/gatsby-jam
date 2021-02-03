import { IAnimatedGameObjectConfig, AnimatedGameObject } from "@/app/core/GameObject";
import { Ticker } from "pixi.js";
import { Game } from "../..";

import { TrafficDirection, TrafficLane } from '../../components/street/traffic-lane';

export interface IVehicleConfig extends IAnimatedGameObjectConfig {
    direction: TrafficDirection;
}

export class Vehicle extends AnimatedGameObject {

    speed: number;
    playable: boolean;
    lane: number;
    spawnDelay: number;
    direction: TrafficDirection;
    

    private _controls: any;

    constructor(config: IVehicleConfig){
        super(config);

        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(0.5);

        this.sprite.on('added', () => {
            this.play();
        })

        this.direction = config.direction || TrafficDirection.RIGHT;
        this.speed = config.speed || 2;

        

    }

    faceLeft(){
        this.sprite.width = -this.sprite.width;
    }

    moveLeft(dist: number){
        this.x -= dist;
    }

    moveRight(dist: number){
        this.x += dist;
    }

    setPosition(pos: number){
        this.sprite.x = pos;
    }

    shouldPark(){
        return this.direction === TrafficDirection.LEFT ? this.x < -64 : this.x > 512+64;
    }

    addToLane(lane: TrafficLane){
        lane.addChild(this.sprite)
    }

    play(){
        if (this.direction === TrafficDirection.LEFT){
            this.width = -this.width;
            this.x = 512 + this.sprite.width;
        }
        else {
            this.x = -64;
        }
        Ticker.shared.add(this.tick, this)
    }

    tick(delta: number){
        if (this.direction === TrafficDirection.LEFT){
            this.moveLeft(this.speed * delta);
        }
        else {
            this.moveRight(this.speed * delta);
        }
        if (this.shouldPark()){
            Ticker.shared.remove(this.tick, this);
            this.destroy();
        }
    }

}