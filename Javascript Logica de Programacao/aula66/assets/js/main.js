const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar')
const estilosBody = getComputedStyle(document.body);

let timer;
let time = 0;

String.prototype.toHHMMSS = function() {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
}

function horario() {
    timer = setInterval(function() {
        time++;
        relogio.innerHTML = time.toString().toHHMMSS();
    }, 1000);
}

iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    horario();
    relogio.style.color = 'black';
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.style.color = 'red';
});

zerar.addEventListener('click', function(event) {
    time = 0;
    relogio.innerHTML = time.toString().toHHMMSS()
    relogio.style.color = 'black';
});