// Declara;cão de funções (Function hoisting)
falaOi();

function falaOi() {
    console.log('Oi');
}

// First-class objects (Objetso de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};

souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando');
    }
}

obj.falar();