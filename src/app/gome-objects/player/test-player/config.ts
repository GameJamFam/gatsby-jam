import { IGameObjectConfig } from '@/app/core/GameObject';
import { Keyboard } from 'contro';

export default {
    name: "TestPlayer",
    spriteName: "player.png",
    spriteSheet: "test-assets",
    hitboxPoints: [4,32,0,25,9,19,10,9,15,3,26,0,24,12,28,27,19,21,13,32],
} as IGameObjectConfig