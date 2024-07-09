let idade = Number(prompt('digite sua idade'))
let nome = prompt('insira seu nome')

if(idade === 20 && nome === 'henrique'){
    console.log('voce tem 20 anos e se chama henrique')
}

if(idade === 20 || nome === 'henrique'){
    console.log('voce tem 20 anos ou se chama henrique')
}else{
    console.log('voce nao tem 20 anos nem se chama henrique')
}