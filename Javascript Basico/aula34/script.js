function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const idade = form.querySelector('.idade');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            idade: idade.value
        });

        resultado.innerHTML += `<p>Nome: ${nome.value}, \
        Sobrenome: ${sobrenome.value}, Peso: ${peso.value}, Idade: ${idade.value}</p>`
    
        form.reset();
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();