import * as GaussianSplat3D from '../../../lib/gaussian-splat-3d.module.js';

export class Scene {

    constructor() {
    }

    load() {
        const viewer = new GaussianSplat3D.Viewer(null, [0, -1, -0.6], [-1, -4, 6], [0, 4, -0],  20);
        viewer.init();
        viewer.loadFile('assets/data/garden/garden.splat')
        .then(() => {
            viewer.start();
        });
    }
}