// import { Keyboard, or } from "contro";
// import { Sprite, Texture, Ticker } from "pixi.js";
// import { GameObject } from "./core/Game/GameObject";



// export class Player extends GameObject {

//     speed: number;
//     playable: boolean;

//     private _controls: any;

//     constructor(texture: Texture, opts: any = {}){
//         super(texture);
//         Object.assign(this, {
//             speed: 4
//         }, opts);

//         this.setHitBox([4,32,0,25,9,19,10,9,15,3,26,0,24,12,28,27,19,21,13,32]);
//     }

//     play(){
//         const keyboard = new Keyboard();

//         this._controls = {
//             moveUp: keyboard.key('ArrowUp'),
//             moveLeft: keyboard.key('ArrowLeft'),
//             moveDown: keyboard.key('ArrowDown'),
//             moveRight: keyboard.key("ArrowRight")
//         };

//         Ticker.shared.add(this.tick, this)
//     }

//     queryControls(){
        
//     }

//     move(direction: string){

//         switch (direction){
//             case 'up':
            
//         }
//     }

//     tick(time: number){
//         const dist = this.speed/time;
//         if (this._controls.moveUp.query()){
//             this.y -= dist
//         }
//         if (this._controls.moveDown.query()){
//             this.y += dist
//         }
//         if (this._controls.moveRight.query()){
//             this.x += dist
//         }
//         if (this._controls.moveLeft.query()){
//             this.x -= dist
//         }
//     }


// }