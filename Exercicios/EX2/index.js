// exercicio 01 dia 03
let fome = String(prompt('voce esta com fome (s/n)'))
let money = String(prompt('voce esta com dinheiro (s/n)'))
let rest = String(prompt('seu rest favorito ta aberto (s/n)'))

if(fome === 'sim' && money === 'sim' && rest === 'sim'){
    console.log('hoje a janta sera no seu restaurante preferido')
}else if(fome === 'nao' || money === 'nao'){
    console.log('hoje a janta sera em casa')
}else{
    console.log('peca um delivery')
}

