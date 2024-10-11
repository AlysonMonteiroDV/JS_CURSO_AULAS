
function fizzBuzz (numero){
    if (numero === Number(numero) ){
        console.log(`${numero} realmente é um número`);
    }else{
        console.log(`${numero} não é um número`); 
        }
    switch(numero){
        case numero:
            if(numero % 3 == 0 && numero % 5 == 0){
            return console.log('FizzBuzz');
        }
        case numero:
            if(numero % 3 == 0 ){
            return console.log('fizz');
        }
        case numero:
            if(numero % 5 == 0 ){
            return console.log('Buzz');
        }
        
        case numero:
            if(numero % 3 !== 0 & numero % 5 !== 0 ){
            return console.log(`${numero} não divisivel por 5 ou 3`);
        }
        
      
        
        
    }
   
}

for( i = 0;i <= 100 ; i++){   
    fizzBuzz(i);
}
