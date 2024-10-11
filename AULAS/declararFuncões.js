//Declaração de função(function hoisting)


function falaOI(){
    console.log('oi');
}

//firt-class objects(objetos de primeira classe)
//function expression

const souUmDado = function(){
    console.log('sou um dado');
}

const arrowFunction = () =>{
    console.log('Sou uma arrow Function');
}

//dentro do objeto

const obj = {
    falarOi(){
        console.log('oi estou falando ...');
    }
}

obj.falarOi();
arrowFunction();
falaOI();
souUmDado();