import { IAnimatedGameObjectConfig, AnimatedGameObject } from "@/app/core/GameObject";
import { Ticker } from "pixi.js";
import { Game } from "../..";


export class Vehicle extends AnimatedGameObject {

    speed: number;
    playable: boolean;
    lane: number;
    spawnDelay: number;
    

    private _controls: any;

    constructor(config: IAnimatedGameObjectConfig){
        super(config);

        this.speed = config.speed || 2

        this.sprite.anchor.set(0.5);
    }

    play(){
        Ticker.shared.add(this.tick, this)
    }

}