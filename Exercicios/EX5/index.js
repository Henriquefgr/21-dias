//exercicios usando switch case
let valor 
let quantidade
let opcao = prompt('bem vindo ao posto do rique; voce deseja:', "/n1 - abastecer gasolina", "/n2 - abastecer alcool", "/n3 - calibrar pneus")

switch(opcao){
    case '1':
        valor = parseInt(prompt('digite o valor desejado para abastecer'))
        quantidade = valor / 5
        console.log("foram abastecidos", quantidade ,"litros de gasolina")
         break;
    case '2':
        valor = parseInt(prompt('digite o valor desejado para abastecer'))
        quantidade = valor / 3
        console.log("foram abastecidos", quantidade , "litros de alcool")
         break;
    case '3':
        console.log('pneus calibrados com sucesso')
         break;
}

