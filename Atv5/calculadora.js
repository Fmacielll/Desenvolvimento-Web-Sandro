// Declarando as variáveis
const valorConta = 100;
const percentualGorjeta = 15;
const valorGorjeta = valorConta * (percentualGorjeta / 100);
const valorTotal = valorConta + valorGorjeta;

// Exibindo o valor
console.log(
  `Valor da conta: R$${valorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, Total a pagar: R$${valorTotal.toFixed(2)}`,
);

//tofixed controla as casas decimais
//console.log serve para exibir
