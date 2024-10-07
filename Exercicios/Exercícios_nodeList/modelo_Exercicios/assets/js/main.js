// colocar os paragrafos com a cor de fundo igual da do body

const div = document.querySelector('.paragrafos')
const para = div.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroudColorBody = estilosBody.backgroundColor;
console.log(backgroudColorBody);

for( p of para){
    console.log(p)
}


