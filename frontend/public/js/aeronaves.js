const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sId = document.querySelector('#m-idaero')
const sModelo = document.querySelector('#m-modelo')
const sFabricante = document.querySelector('#m-fabricante')
const sAnoFabricacao = document.querySelector('#m-anoFabricacao')
const sNumeroAssentos = document.querySelector('#m-numeroAssentos')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function abrirPagina(pagina) {
    window.location.href = pagina;
}

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sId.value = itens[index].idaero
    sModelo.value = itens[index].modelo
    sFabricante.value = itens[index].fabricante
    sAnoFabricacao.value = itens[index].anoFabricacao
    sNumeroAssentos.value = itens[index].numeroAssentos
    id = index
  } else {
    sId.value = ''
    sModelo.value = ''
    sFabricante.value = ''
    sAnoFabricacao.value = ''
    sNumeroAssentos.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.idaero}</td>
    <td>${item.modelo}</td>
    <td>${item.fabricante}</td>
    <td>${item.anoFabricacao}</td>
    <td>${item.numeroAssentos}</td>
    
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sId.value == '' || sModelo.value == '' || sFabricante.value == ''|| sAnoFabricacao.value == ''|| sNumeroAssentos.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].idaero = sId.value
    itens[id].modelo = sModelo.value
    itens[id].fabricante = sFabricante.value
    itens[id].anoFabricacao = sAnoFabricacao.value
    itens[id].numeroAssentos = sNumeroAssentos.value
  } else {
    itens.push({'idaero': sId.value, 'modelo': sModelo.value, 'fabricante': sFabricante.value, 'anoFabricacao': sAnoFabricacao.value, 'numeroAssentos': sNumeroAssentos.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()

document.getElementById("logout").addEventListener("click", function () {
    abrirPagina("dashboard.html");
});
