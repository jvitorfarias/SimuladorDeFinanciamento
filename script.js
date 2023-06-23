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

const form = document.getElementById('formFinanciamento');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const valor = parseFloat(document.getElementById('valor').value);
  const juros = parseFloat(document.getElementById('juros').value);
  const parcelas = parseInt(document.getElementById('parcelas').value);

  const resultado = valor + (valor * juros * parcelas);
  document.getElementById('resultado').textContent = "O valor total do financiamento é: R$ " + resultado;
});

const veiculos = ["Carro", "Moto", "Caminhão", "Van", "Ônibus"];
  const selectVeiculo = document.getElementById("veiculo");
  
  veiculos.forEach(veiculo => {
    const option = document.createElement("option");
    option.textContent = veiculo;
    selectVeiculo.appendChild(option);
  });

  selectVeiculo.addEventListener('change', function() {
    const veiculoSelecionado = selectVeiculo.value;
    document.getElementById('veiculoSelecionado').textContent = "Veículo selecionado: " + veiculoSelecionado;
  });

  

  