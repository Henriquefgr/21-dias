// solicitado informacoes do usarios

let nome = prompt('digite seu nome')
let idade = parseInt(prompt('digite sua idade'))
let altura = parseFloat(prompt('digite sua altura'))
let peso = parseFloat(prompt('digite seu peso'))

// cauculado ano que nasceu e imc do usario 
let anoQnasceu = 2024 - idade
let imc = peso / (altura * altura)

console.log('ola, ' +nome+ ' voce nasceu em ' + anoQnasceu +  ', voce tem de altura ' + altura + ', pesa ' + peso + ' kg' + ', e seu imc e ' +imc+ ' kg/m2 ' )