const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaLi(){
    //"li" escopo interno
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value)return;

        criaTarefa(inputTarefa.value);
    }
})

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title','apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textInput){
    //"li" escopo interno
    const li = criaLi();
    li.innerText = textInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}


btnTarefa.addEventListener('click',function(){
 if(!inputTarefa.value)return;

 criaTarefa(inputTarefa.value);
});

document.addEventListener('click',function(e){
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    };
})


function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTrefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTrefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaDeTrefas);
    localStorage.setItem('tarefas', tarefasJson);
}


function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();