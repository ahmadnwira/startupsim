export class MCView {
    constructor() {
        this.res = document.querySelector('.result');
    }

    /**
     * @param {Number} mean.
     * @param {Number} SD standard deviation.
     * displays the simulation result.
     */
    displayResult(mean, SD) {
        this.res.innerHTML =
            `will last for (${(mean-(1.96*SD)).toFixed(0)}-${(mean+(1.96*SD)).toFixed(0)})/days 95% of the time`;
    }

    displayLoad() {
        this.res.innerHTML = 'computing';
    }

}