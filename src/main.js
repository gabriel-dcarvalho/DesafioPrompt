// Entrada de dados: ler um número.
// Processamento: calcular o dobro.
// Saída: informar o resultado.

const numero = prompt("Digite um número");
const processamento = numero * 2;
alert("O dobro do número é " + processamento);

// Entrada de dados: ler o valor da conta.
// Processamento: calcular junto com o valor do custo do garçom.
// Saída: informar o resultado.

let ValorConta = Number(prompt("O valor da conta é ", ""));
let CustoGarcom = 10;
const ValorTotal = ValorConta + CustoGarcom;
alert("O valor da consumação é R$ " + ValorConta + " e o valor da gorjeta é R$ " + CustoGarcom + ". O valor total da conta é R$ " + ValorTotal);

// Entrada de dados: ler o valor da conta e a quantidade de clientes.
// Processamento: calcular o valor a ser pago por cliente.
// Saída: informar o resultado.

let ValorGeral = prompt("Qual é o valor da conta?");
let QtdClientes = prompt("Quantos clientes consumiram?");
const ValorPorCliente = ValorGeral / QtdClientes;
alert("O valor por cliente é R$ " + ValorPorCliente);