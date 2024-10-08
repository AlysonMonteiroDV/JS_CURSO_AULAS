function relogio(){
    const relogio = document.querySelector('.timer');

let segundos = 0;
let timer;

 function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC' // OR 'UTC'
    });
 }
 function iniciaRelogio(){
        timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    },1000);
 }


document.addEventListener('click',function(e) {
    const el = e.target;

    if(el.classList.contains('reiniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    };

    if(el.classList.contains('parar')){
        clearInterval(timer);
        relogio.classList.add('pausado')
    };

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer);
    iniciaRelogio();
    }
});

}


relogio();