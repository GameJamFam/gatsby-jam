import { IControls } from "../Controls/IControls";
import { IGameObjectConfig } from "./IGameObjectConfig";

export interface IAnimatedGameObjectConfig extends IGameObjectConfig {
    speed?: number;
    controls?: IControls;
}