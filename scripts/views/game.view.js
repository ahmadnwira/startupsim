import { appendLi } from '../utils';

export class GameView {
    constructor() {
        this.f = document.querySelector('#displayFund');
        this.d = document.querySelector('#displayDays');
        this.logList = document.querySelector('.log');

        this.addFeature = document.querySelector('#feature');

        this.pivot = document.querySelector('#pivot');

        this.ico = document.querySelector('#ico');
    }

    /**
     * @param {fund} fund displays remaing fund.
     */
    displayFund(fund) {
        this.f.innerHTML = `fund: ${fund}`;
    }

    /**
     * @param {string} days displays count of days since launch.
     */
    displayDays(days) {
        this.d.innerHTML = `days: ${days}`;
    }

    /**
     * @param {string} msg
     */
    displayMessage(msg) {
        appendLi(this.logList, msg);
    }

    /**
     * @param {Function} handler Function called on synthetic event.
     */
    bindAddFeature(handler) {
        this.addFeature.addEventListener('click', handler);
    }

    /**
     * @param {Function} handler Function called on synthetic event.
     */
    bindPivot(handler) {
        this.pivot.addEventListener('click', handler);
    }

    /**
     * @param {Function} handler Function called on synthetic event.
     */
    bindICO(handler) {
        this.ico.addEventListener('click', handler);
    }
}