import { GameObject } from "@/app/core/GameObject";
import { Traffic } from "./traffic";
import { Texture, TilingSprite } from "pixi.js";

export enum TrafficDirection {
    RIGHT,
    LEFT
}

export class Lane extends TilingSprite {
    gameObjects: GameObject[];
    traffic: Traffic;
    direction?: TrafficDirection;

    constructor(texture: Texture, width: number, height: number){
        super(texture, width, height);
    }

    addGameObjects(...objs: GameObject[]){
        for (const obj of objs){
            this.gameObjects.push(obj);
        }
    }


}