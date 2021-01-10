import { GameObject } from "./GameObject";

export interface IGameObjectConfig {
    name: string;
    spriteName: string;
    spriteSheet?: string;
    hitboxPoints?: number[];
}