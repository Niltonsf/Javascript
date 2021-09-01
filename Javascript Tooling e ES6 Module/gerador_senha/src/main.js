import ButtonsCheck from './modules/ButtonsCheck';
import './assets/css/style.css';

const c1 = new ButtonsCheck();

const button = document.querySelector('.send-button');
const div = document.querySelector('.senha-gerada');

button.addEventListener('click', function(e) {
    const value = c1.validate();
    if (value) {
        div.innerText = value;
    }
});