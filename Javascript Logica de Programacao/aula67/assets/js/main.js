const input = document.querySelector('.container .input-tarefa');
const btnTarefa = document.querySelector('.container .btn-env-tarefa');
const ul = document.querySelector('.container .tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(texto) {
    const li = criaLi();
    li.innerText = texto;
    ul.appendChild(li);
    clearInput();
    createButtonApagar(li);
    salvarTarefas();
}

function salvarTarefas() {
    const liTarefas = ul.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function clearInput() {
    input.value = '';
    input.focus();
}

function createButtonApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar está tarefa');
    li.appendChild(botaoApagar);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

btnTarefa.addEventListener('click', function(event) {
    if (!input.value) return;
    criaTarefa(input.value);
});

input.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        if (!input.value) return;
        criaTarefa(input.value);
    }
});

document.addEventListener('click', function(event) {
    const el = event.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});