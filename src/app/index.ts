import { Application, Loader, LoaderResource, Sprite, Ticker } from 'pixi.js';
import assets from './assets';


import "./main.scss";
// import { collidesWith } from './common/collides-with';
import { Stage } from './core/Stage/Stage';
import { TestStreet } from './stages/test-street/test-street';

window.PIXI = PIXI;

export class Game extends Application {

    static instance: Application;
    playStage: Stage;

    constructor(){
        super({
            autoDensity: true,
            width: 512,
            height: 288,
            resizeTo: document.getElementById('game_frame')
        })

        this.stage.scale.set(this.view.width/512)

        Loader.shared.add(assets);
        Loader.shared.load((_,r) => {
            // this.resize();
            
            this.playStage = new TestStreet();
            this.stage.addChild(this.playStage);
        });


        // Add canvas to DOM
        document.body.appendChild(this.view);

        // window.onresize = () => {
        //     // this.resize();
        // };
    }

    static init(){
        Game.instance = new Game();
    }

    play(){
        
    }


    resize() {
        let ratio = 16/9;
        if (window.innerWidth / window.innerHeight >= ratio) {
                let ancho = ~~(window.innerHeight * ratio);
                let alto= window.innerHeight;
    
                this.view.style.position = 'absolute';
                this.view.style.width = ancho + 'px';
                this.view.style.height = alto + 'px';
                //console.log("A");
                
                this.view.style.left = ~~((window.innerWidth-ancho)/2) + 'px';
                this.view.style.top = '0px';
                
        } else {
                
            let ancho = window.innerWidth;
            let alto = ~~(window.innerWidth / ratio);
    
                this.view.style.position = 'absolute';
                this.view.style.width = ancho + 'px';
                this.view.style.height = alto + 'px';
                //console.log("B");
                this.view.style.left = 0 + 'px';
                this.view.style.top = (window.innerWidth-(alto/2)) + 'px';
                
        }
        //console.log(ancho,alto);
        
            
    }

    
}

Game.init();

