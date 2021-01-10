import { Stage } from "../Stage";

export class Scene {
    
    parent: Stage;

    constructor(parent: Stage){
        this.parent = parent;
    }

    play?(...any: any[]): any {};
    tick?(delta: number): void {};


}