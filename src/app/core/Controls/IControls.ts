import { Control} from "contro/dist/core/control";

export type ControlType = string;

export interface IControls {
    [index: string]: any;
}

export enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}