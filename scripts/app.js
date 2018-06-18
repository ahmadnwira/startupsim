import {GameMode} from './game';
import {MCMode} from './mc';
import {GameView} from './views/game.view';
import {MCView} from './views/mc.view';

const gameView = new GameView();
const mcView = new MCView();

const game = new GameMode(gameView);
const mc = new MCMode(mcView);

const app = document.querySelector('.paramters');
app.addEventListener('submit', e => {
    e.preventDefault();
    e.target.querySelector('[type="checkbox"]').checked ? game.run(e) : mc.run(e);
});