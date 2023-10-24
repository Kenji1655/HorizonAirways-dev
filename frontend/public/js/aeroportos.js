const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sAeroporto = document.querySelector('#m-aeroporto')
const sCidade = document.querySelector('#m-cidade')
const sSigla = document.querySelector('#m-sigla')
const sPais = document.querySelector('#m-pais')
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
    sAeroporto.value = itens[index].aeroporto
    sCidade.value = itens[index].cidade
    sSigla.value = itens[index].sigla
    sPais.value = itens[index].pais
    id = index
  } else {
    sAeroporto.value = ''
    sCidade.value = ''
    sSigla.value = ''
    sPais.value = ''
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
    <td>${item.aeroporto}</td>
    <td>${item.sigla}</td>
    <td>${item.cidade}</td>
    <td>${item.pais}</td>
    
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
  
  if  (sAeroporto.value == '' || sCidade.value == '' ||  sSigla.value == ''|| sPais.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].aeroporto =sAeroporto.value
    itens[id].cidade = sCidade.value
    itens[id].sigla =  sSigla.value
    itens[id].pais =  sPais.value
  } else {
    itens.push({'aeroporto': sAeroporto.value, 'cidade': sCidade.value, 'sigla':   sSigla.value, 'pais':   sPais.value})
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
