function mostraHora(){
    let data = new Date();


    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    }) 
}

function soma(x,y){
    x = 4
    y = 5
    return y + y;
}

const somaIntervalo = setInterval(
    function(){
        console.log(soma())
    },1000); //1 segundo

setTimeout(
    function(){
        clearInterval(somaIntervalo)
    },3000);

const timer = setInterval(
    function(){console.log(mostraHora())}
    ,1000);

setTimeout(function(){
    clearInterval(timer);
},5000);

setTimeout(function(){
    console.log('TIMER STOP')
},7000)