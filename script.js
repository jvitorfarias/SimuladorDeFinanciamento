/*const calcularFinanciamento = (valor, juros, parcelas) =>  valor + (valor * juros * parcelas);

let valor = parseFloat(prompt("Digite o valor do financiamento:"));
let juros = parseFloat(prompt("Digite a taxa de juros (% ao mês):"));
let parcelas = parseInt(prompt("Digite a quantidade de parcelas:"));
let resultado = calcularFinanciamento(valor, juros, parcelas);

alert("O valor total do financiamento é: R$ " + resultado);

let valor = prompt("Insira o valor do financiamento")
let taxa = prompt("Taxa")
let parcelas = prompt("Quantidade de parcelas")
let resultado = parseFloat(valor * taxa * parcelas);

alert ("Valor total financiado é: R$ " + resultado)*/


// Capturar o formulário
const form = document.getElementById('formFinanciamento');

// Adicionar um ouvinte de eventos para o envio do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar o comportamento padrão de envio do formulário

  // Ler os valores dos campos do formulário
  const valor = parseFloat(document.getElementById('valor').value);
  const juros = parseFloat(document.getElementById('juros').value);
  const parcelas = parseInt(document.getElementById('parcelas').value);

  // Calcular o resultado
  const resultado = valor + (valor * juros * parcelas);

  // Exibir o resultado na tela
  document.getElementById('resultado').textContent = "O valor total do financiamento é: R$ " + resultado;
});
