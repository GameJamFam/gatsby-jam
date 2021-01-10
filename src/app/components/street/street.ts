import { Stage } from "@/app/core/Stage/Stage";
import { Texture } from "pixi.js";
import { Lane, TrafficDirection } from "./lane";

export class Street {

    lanes: Lane[] = [];
    median: Lane;
    numLanes: number = 4;

    constructor(roadTexture: Texture, medianTexture: Texture){

        this.median = new Lane(medianTexture, 512, 32);
        this.median.position.y = 128;
        
        for (let i = 1; i <= this.numLanes; i++){
            const offsetTop = 34;
            const lane = new Lane(roadTexture, 512, 34);
            lane.position.y = (i * 32) + 32;
            lane.tileTransform.rotation = i % 2 ? 0 : Math.PI;
            lane.tileScale.y = 1.2
            if (i < 3){
                lane.direction = TrafficDirection.LEFT;
            }
            else {
                // Additional offset for median
                lane.position.y += 32;
                lane.direction = TrafficDirection.RIGHT;
            }

            this.lanes.push(lane);
        }

    }

    addToStage(stage: Stage){
        console.log(this.lanes)
        stage.addChild(this.median);
        for (let i = 0; i < this.numLanes; i++){
            stage.addChild(this.lanes[i]);
        }
    }
}