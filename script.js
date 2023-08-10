function darkMode() {
  let modeDark = document.getElementById("modoEscuro")
  modeDark.classList.toggle("dark")
}

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