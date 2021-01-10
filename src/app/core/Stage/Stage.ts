import { ClassFactory } from "@/app/common/class-factory";
import { Container, Loader, Sprite } from "pixi.js";
import { IStageConfig } from "./IStageConfig";
import { Scene } from "./Scene/Scene";

export class Stage extends Container {
    
    scenes: Scene[];
    currScene: Scene;
    prevScene: Scene;
    loadingScene: Scene;

    constructor(opts: IStageConfig){
        super();

        this.scenes = opts.scenes;
        this.currScene = ClassFactory(opts.firstScene, this) as Scene;
    }

    play?(...any: any[]): any {}
    tick?(...any: any[]): any {}
}