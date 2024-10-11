//argumentos que sustenta todos os argumentos enviados

function funcao(){
    let c = 0
    for(let arg of arguments){
        c += arg
        
        
    }
    // console.log(c);
}

funcao(1,2,3,4,5,6,7,8) 

function funcao2([v1,v2,v3]){
    // console.log([v1,v2,v3]);
}


funcao2(['luiz','paulo','felipe',30]);

function funcao3({nome,sobrenome,idade}){
    // console.log(nome,sobrenome,idade);
}

funcao3({nome:'alyson', sobrenome:'monteiro', idade: 23});

//function normal
function funcao4(operador,acumulador, ...numeros ){
    for(numero of numeros){
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero

    }
    // console.log(acumulador);
}

//function expression
const conta = (operador,acumulador, ...numeros ) => {
    console.log(arguments)
    //não existe arguments para arrow function
};


const conta2 = (...args ) => {
    console.log(args);
    // com restOp erator é possivel passar os arguments 
};


conta('*',1,40,20,40,50);
conta2('*',1,40,20,40,50);