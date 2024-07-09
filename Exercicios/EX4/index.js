// exercicios de switch case

let num1 = Number(prompt('escolha 1 numero'))
let num2 = Number(prompt('escolha outro numero'))

let opcao = prompt('escolha qual operacao matematica basica voce quer (+)(-)(x)(/)')

switch(opcao){
    case "+":
        console.log('voce escolheu operacao de soma')
        console.log('a soma dos numero escolhidos e =',  num1 + num2 )
        break;
    case "-":
        console.log('voce escolheu operacao de subtracao')
        console.log('a subtracao dos numeros escolhidos e = ',  num1 - num2)
        break;
    case "x":
        console.log('voce escolheu operacao de multiplacao')
        console.log( 'a multiplicacao dos numeros escolhidos e = ', num1 * num2)
        break;
    case "/":
        console.log('voce escolheu operacao de divisao')
        console.log( 'a divisao dos numeros escolhidos e = ', num1 / num2)
        break;
    default:
        console.log('erro')
        break;
}