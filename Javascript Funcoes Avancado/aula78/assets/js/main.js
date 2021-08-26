function Calculadora() {
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');


    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida!');
            return;
        }
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (event) => {
            const ev = event.target;

            if (ev.classList.contains('btn-num')) {
                this.btnParaDisplay(ev.innerText);
            }

            if (ev.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (ev.classList.contains('btn-delete')) {
                this.apagaOne();
            }

            if (ev.classList.contains('btn-equal')) {
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };
}

const calc = new Calculadora();
calc.inicia();