import { getMean, getSD } from './utils';

export class MCMode {
    constructor(view) {
        this.v = view;

        this.worker = new Worker('./scripts/mcWorker.js');

        this.worker.onmessage = function (e) {
            const mean = getMean(e.data);
            const SD = getSD(e.data, mean).toFixed(3);
            view.displayResult(mean, SD);
        }.bind(this);

    }

    run(e) {
        const p = {
            makeMoney: e.target.querySelector('#makeMoney').value / 100,
            loseMoney: e.target.querySelector('#loseMoney').value / 100,
            getFunded: e.target.querySelector('#getFunded').value / 100,
            inflation: e.target.querySelector('#inflation').value / 100,
            rent: Number(e.target.querySelector('#rent').value),
            fund: Number(e.target.querySelector('#fund').value),
            trials: Number(e.target.querySelector('#trials').value),
            days: 0
        };
        this.worker.postMessage(p);
        this.v.displayLoad()
    }
}