import { GameObject } from "./GameObject";
import { IAnimatedGameObjectConfig } from "./IAnimatedGameObjectConfig";
import { IControls } from "../Controls/IControls";
import { IGameObjectConfig } from "./IGameObjectConfig";


export class AnimatedGameObject extends GameObject {
    
    speed: number;
    controls?: IControls;

    constructor(opts: IAnimatedGameObjectConfig){
        super(opts);

        if (opts.controls){
            this.controls = opts.controls;
        }
    }

    kill?(...any: any[]): any;
}