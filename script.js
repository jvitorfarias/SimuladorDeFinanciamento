const calcularFinanciamento = (valor, juros, parcelas) =>  valor + (valor * juros * parcelas);

let valor = parseFloat(prompt("Digite o valor do financiamento:"));
let juros = parseFloat(prompt("Digite a taxa de juros (% ao mês):"));
let parcelas = parseInt(prompt("Digite a quantidade de parcelas:"));
let resultado = calcularFinanciamento(valor, juros, parcelas);

alert("O valor total do financiamento é: R$ " + resultado);
