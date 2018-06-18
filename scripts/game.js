import {step} from './utils';

export class GameMode {
    constructor(view) {
        this.v = view

        this.params = {
            isSet: false
        };

        view.bindAddFeature(this.addFeature.bind(this));
        view.bindPivot(this.pivot.bind(this));
        view.bindICO(this.ico.bind(this));
    }

    gameStep(params) {
        params.days++;
        step(params);
        if (params.fund <= 0) clearInterval(this.gameInterval);
        this.v.displayFund(params.fund);
        this.v.displayDays(params.days);
    }

    run(e) {
        this.params = {
            makeMoney: e.target.querySelector('#makeMoney').value / 100,
            loseMoney: e.target.querySelector('#loseMoney').value / 100,
            getFunded: e.target.querySelector('#getFunded').value / 100,
            inflation: e.target.querySelector('#inflation').value / 100,
            rent: Number(e.target.querySelector('#rent').value),
            fund: Number(e.target.querySelector('#fund').value),
            trials: Number(e.target.querySelector('#trials').value),
            days: 0
        };

        this.gameInterval = setInterval(() => {
            this.gameStep(this.params)
        }, 300);

    }

    addFeature() {
        if (this.params.isSet || this.params.isSet === undefined) {
            let msg = 'The new feature failed';
            if (Math.random() <= .3) {
                this.params.makeMoney += .05;
                msg = 'successfull feature p(earning) is up by 5%';
            }
            this.params.fund -= 10000;
            this.v.displayMessage(msg);
        }
    }

    pivot() {
        if (this.params.isSet || this.params.isSet === undefined) {
            let msg = 'Your pivot failed';
            if (Math.random() <= .6) {
                this.params.makeMoney += .05;
                this.params.loseMoney -= .02;
                msg = 'successfully pivoted p(loosing) is down by 2% & p(earning) is up by 5%';
            }
            this.params.fund -= 10000;
            this.v.displayMessage(msg);
        }
    }

    ico() {
        if (this.params.isSet || this.params.isSet === undefined) {
            let msg = 'Your ICO failed';
            if (Math.random() <= .01) {
                this.params.fund += 500000;
                this.params.loseMoney -= .2;
                this.params.makeMoney += .1;
                msg = 'ICO succeeded +500k p(loosing) is down by 2% & p(earning) is up by 1%';
            }
            this.params.fund -= 10000;
            this.v.displayMessage(msg);
        }
    }
}