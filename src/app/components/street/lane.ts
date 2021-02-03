import { GameObject } from "@/app/core/GameObject";
import { Traffic, TrafficDirection } from "./traffic";
import { Texture, Ticker, TilingSprite } from "pixi.js";
import { Vehicle } from "@/app/gome-objects/vehicle/vehicle";



export class Lane extends TilingSprite {
    gameObjects: GameObject[];

    constructor(texture: Texture, width: number, height: number){
        super(texture, width, height);
    }

    addGameObjects(...objs: GameObject[]){
        for (const obj of objs){
            this.gameObjects.push(obj);
        }
    }

    tick(delta: number){
        for (let obj of this.gameObjects){
            
        }
    }


}