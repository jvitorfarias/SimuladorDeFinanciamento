const cars1 = document.getElementById("car")

fetch("carsList.json").then((response) => {
  response.json().then((dados) => {
    dados.carsList.forEach((cars) => {
      const folder = document.createElement("div")
      folder.className = "listCars"
      const header = document.createElement("h3")
      header.innerText = cars.brand
      folder.appendChild(header)

      const photos = document.createElement("img")
      photos.src = cars.photo
      photos.className = "photoCars"
      folder.appendChild(photos)

      const dataSheetModel = document.createElement("p")
      dataSheetModel.innerText = cars.model
      folder.appendChild(dataSheetModel)

      const dataSheetYear = document.createElement("p")
      dataSheetYear.innerText = cars.year
      folder.appendChild(dataSheetYear)

      const dataSheetKm = document.createElement("p")
      dataSheetKm.innerText = cars.km
      folder.appendChild(dataSheetKm)

      const price = document.createElement("p")
      price.innerText = `R$ ${cars.price}`
      folder.appendChild(price)

      const button = document.createElement("button")
      button.innerText = "Solicitar proposta"
      
      button.addEventListener("click", () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sua proposta foi solicitada!',
          showConfirmButton: false,
          timer: 1500
        })
        
      })

      folder.appendChild(button)
      cars1.appendChild(folder)
    })
  })
})

const form = document.getElementById("formFinanciamento")
const tabela = document.getElementById("resultado")

form.addEventListener("submit", function(event) {
  event.preventDefault()

  let valor = Number(document.getElementById("valor").value)

  let parcelas = Number(document.getElementById("parcelas").value)
  let resultado = (valor / parcelas) * 1.7
  let valorTotal = resultado * parcelas

  tabela.className = "tabela"

  let prestacao = document.createElement("p")
  prestacao.innerText = `Valor prestação: R$ ${(resultado).toFixed(2)}`
  tabela.appendChild(prestacao)

  let prestacoes = document.createElement("p")
  prestacoes.innerText = `Nº prestações: ${parcelas} `
  tabela.appendChild(prestacoes)

  let financiado = document.createElement("p")
  financiado.innerText = `Valor financiado: R$ ${(valorTotal).toFixed(2)}`
  tabela.appendChild(financiado)
})



//const veiculos = ["Carro", "Moto", "Caminhão", "Van", "Ônibus"]
//  const selectVeiculo = document.getElementById("veiculo")
//  
//  veiculos.forEach(veiculo => {
//    const option = document.createElement("option")
//    option.textContent = veiculo
//    selectVeiculo.appendChild(option)
//  })
//
//  selectVeiculo.addEventListener('change', function() {
//    const veiculoSelecionado = selectVeiculo.value
//    document.getElementById('veiculoSelecionado').textContent = "Veículo selecionado: " + veiculoSelecionado
//  })
//
//  document.addEventListener('keydown', function(event) {
//    if (event.keyCode === 13) {
//      console.log('Tecla Enter pressionada!')
//    }
//  })
  
/*const calcularFinanciamento = (valor, juros, parcelas) =>  valor + (valor * juros * parcelas)

let valor = parseFloat(prompt("Digite o valor do financiamento:"))
let juros = parseFloat(prompt("Digite a taxa de juros (% ao mês):"))
let parcelas = parseInt(prompt("Digite a quantidade de parcelas:"))
let resultado = calcularFinanciamento(valor, juros, parcelas)

alert("O valor total do financiamento é: R$ " + resultado)

let valor = prompt("Insira o valor do financiamento")
let taxa = prompt("Taxa")
let parcelas = prompt("Quantidade de parcelas")
let resultado = parseFloat(valor * taxa * parcelas)

alert ("Valor total financiado é: R$ " + resultado)*/