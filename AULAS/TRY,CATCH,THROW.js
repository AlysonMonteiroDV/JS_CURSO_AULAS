//teoria 

try{
    //executa quando não há erros
}catch(error /*aqui vem o erro*/){
    //executa quando há erros
}



function soma(x,y){
    if(
        typeof x !== 'number'
        ||
        typeof y !== 'number'
    ){
        throw new Error('x e y precisam ser números');
    }

    return x + y;
}

try{
console.log(soma(4,5));
console.log(soma('a',8))
}catch(error){
    console.log(error);
    console.log('Alguma coisa amigavel para o usuario');
}