import config from "./config";
import { Stage } from "@/app/core/Stage/Stage";
import { Player } from "@/app/gome-objects/player/player";
import { Loader, Sprite, TilingSprite } from "pixi.js";
import { Game } from "@/app";
import { TestPlayer } from "@/app/gome-objects/player/test-player/test-player";
import { Lane } from "@/app/components/street/lane";
import { Street } from "@/app/components/street/street";
import { Garage } from "@/app/components/garage";
import { Rolls } from "@/app/gome-objects/vehicle/rolls/rolls";

export class TestStreet extends Stage {

    player: Player;
    buildingsTop: TilingSprite;
    buildingsBottom: TilingSprite;
    street: Street;


    constructor(){
        super(config);

        if (!Garage.instance){
            Garage.init();
        }

        Garage.instance.registerVehicles(Rolls)
        
        const sheet = Loader.shared.resources[config.spriteSheet].spritesheet;
        this.buildingsTop = new TilingSprite(sheet.textures['building.png'], 512, 32);
        this.buildingsTop.tilePosition.y = 32;
        // this.buildingsTop.tileScale.set(1)
        this.addChild(this.buildingsTop);
        
        this.buildingsBottom = new TilingSprite(sheet.textures['building.png'], 512, 32);
        this.buildingsBottom.position.y = 256;
        this.addChild(this.buildingsBottom);

        let sideWalkTop = new Lane(sheet.textures['sidewalk.png'], 512, 32);
        sideWalkTop.position.y = 32;
        this.addChild(sideWalkTop);

        let sideWalkBottom = new Lane(sheet.textures['sidewalk.png'], 512, 32);
        sideWalkBottom.position.y = 224;
        this.addChild(sideWalkBottom);

        this.street = new Street(sheet.textures['road.png'], sheet.textures['median.png']);
        this.street.addToStage(this);

        this.player = new TestPlayer();
        this.addChild(this.player.sprite);

        this.on('added', () => {
            this.play();
        })
    }

    play(){
        this.currScene.play();
    }



}