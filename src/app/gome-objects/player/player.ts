import { IAnimatedGameObjectConfig, AnimatedGameObject } from "@/app/core/GameObject";
import { Direction, IControls } from "@/app/core/Controls/IControls";
import { Ticker } from "pixi.js";
import { Keyboard } from "contro";

export interface IPlayerControls extends IControls {
    moveUp: any,
    moveDown: any,
    moveRight: any,
    moveLeft: any
}

export class Player extends AnimatedGameObject {

    controls: IPlayerControls;

    constructor(config: IAnimatedGameObjectConfig){
        let keyboard = new Keyboard();
        config.controls = {
            moveUp: keyboard.key('ArrowUp'),
            moveDown: keyboard.key('ArrowDown'),
            moveLeft: keyboard.key('ArrowLeft'),
            moveRight: keyboard.key('ArrowRight')
        }

        super(config);

        this.speed = config.speed || 2;
    }

    play(){
        Ticker.shared.add(this.tick, this)
    }

    move(d: Direction, speed: number){
        let val: number;
        let axis: string;
        
        if (d == Direction.UP || d == Direction.LEFT){
            val = -Math.abs(speed);
            axis = d == Direction.UP ? 'y' : 'x';
        }
        else {
            val = speed;
            axis = d == Direction.DOWN ? 'y' : 'x';
        }

        this.sprite.position[axis] += val;
    }

    tick(delta: number){
        const controls = this.controls;
        const speed = this.speed * delta;

        if (this.canMove(Direction.UP) && controls.moveUp.query()) this.move(Direction.UP, speed);
        if (this.canMove(Direction.DOWN) && controls.moveDown.query()) this.move(Direction.DOWN, speed);
        if (this.canMove(Direction.LEFT) && controls.moveLeft.query()) this.move(Direction.LEFT, speed);
        if (this.canMove(Direction.RIGHT) && controls.moveRight.query()) this.move(Direction.RIGHT, speed);
    }

    canMove(d: Direction){
        const offset = 16;
        switch (d) {
            case Direction.UP:
                return this.sprite.position.y > 48;
            case Direction.DOWN:
                return this.sprite.position.y < 238;
            case Direction.LEFT:
                return this.sprite.position.x > 0;
            default:
                return this.sprite.position.x < 512;
        }
    }

}