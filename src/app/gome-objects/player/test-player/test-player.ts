import config from "./config";
import { Player } from "@/app/gome-objects/player/player";

export class TestPlayer extends Player {
    constructor(){
        super(config)
    }
}