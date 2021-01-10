import { Graphics, Loader, Sprite, Spritesheet, Texture } from "pixi.js";
import { Shape, Polygon } from 'yy-intersects';

import { IGameObjectConfig } from "./IGameObjectConfig";


export class GameObject {

    sprite: Sprite;
    spriteSheet?: Spritesheet;
    hitBox?: Shape;
    hitBoxPoints?: number[];

    constructor(opts: IGameObjectConfig){

        if (opts.spriteSheet){
            this.spriteSheet = Loader.shared.resources[opts.spriteSheet].spritesheet;
        }
        if (opts.spriteName){
            this.sprite = new Sprite(this.spriteSheet.textures[opts.spriteName]);
        }
        if (opts.hitboxPoints){
            this.hitBox = new Polygon(this.sprite, opts.hitboxPoints);
        }

        this.sprite.anchor.set(0.5);
    }

    play?(...any: any[]): any;
    tick?(delta: number): void;

    setPosition(x: number, y: number){
        this.sprite.position.set(x, y);
    }

    get x(){
        return this.sprite.x;
    }

    get y(){
        return this.sprite.y;
    }

    set x(n: number){
        this.sprite.position.x = n;
    }

    set y(n: number){
        this.sprite.position.y = n;
    }

}