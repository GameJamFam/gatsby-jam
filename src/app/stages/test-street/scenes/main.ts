import { Scene } from "@/app/core/Stage/Scene/Scene";
import { Player } from "@/app/gome-objects/player/player";
import { ObservablePoint } from "pixi.js";
import { TestStreet } from "../test-street";

export class Main extends Scene {

    parent: TestStreet;
    startPoint: any = {x: 10, y: 240};

    constructor(parent: TestStreet){
        super(parent);

    }

    play(){
        const player = this.parent.player;
        
        if (player.x != this.startPoint.x || player.y != this.startPoint.y){
            player.setPosition(this.startPoint.x, this.startPoint.y);
        }

        player.play();
    }

}