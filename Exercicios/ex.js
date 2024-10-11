function ePaisagem(x = 0,y = 0){
    return x > y ? true : false;
}
console.log(ePaisagem(900,150));

//arrow funciton
const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(900,150));

