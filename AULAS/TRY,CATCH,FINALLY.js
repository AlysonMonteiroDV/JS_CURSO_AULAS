try{
    //executa quando não há erros
}catch(error /*aqui vem o erro*/){
    //executa quando há erros
}finally{
    //sempre executa
}

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date')
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
    const data = new Date('01-01-1970 12:58:20');
    const hora = retornaHora();
    console.log(hora);
}catch(error){
    //tratar erro
}finally{
    console.log('tenha um bom dia');
}

