import { IStageConfig } from '@/app/core/Stage/IStageConfig';

import { Main } from "./scenes/main";

export default {
    scenes: [Main],
    firstScene: Main,
    spriteSheet: 'test-assets',
    spriteNames: {
        building: 'building.png'
    }
} as IStageConfig;