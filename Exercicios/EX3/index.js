// Solicita informações do usuário
let nome;
let idade;
let temCarta = false;
let temCarro = false;

nome = prompt('Digite seu nome:');
idade = parseInt(prompt('Digite sua idade:'));
const opcaoCarta = prompt('Você possui carta de motorista? (S/N):')
if (opcaoCarta === 'S') {
    temCarta = true;
}

const opcaoCarro = prompt('Você tem um carro? (S/N):')
if (opcaoCarro === 'S') {
    temCarro = true;
}

// Verifica as condições e exibe a mensagem apropriada
if (idade < 18 || !temCarta) {
    console.log(`${nome}, você não pode dirigir.`);
} else if (idade >= 18 && temCarta && !temCarro) {
    console.log(`${nome}, você pode dirigir mas não tem um carro.`);
} else {
    console.log(`${nome}, você será o motorista!`);
}
