function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (event) => {
                if (event.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
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
        },

        cliqueBotoes() {
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
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();