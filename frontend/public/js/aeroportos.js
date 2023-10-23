const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sAeroporto = document.querySelector('#m-aeroporto')
const sCidade = document.querySelector('#m-cidade')
const sTrecho = document.querySelector('#m-trecho')
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
    sTrecho.value = itens[index].trecho
    id = index
  } else {
    sAeroporto.value = ''
    sCidade.value = ''
    sTrecho.value = ''
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
    <td>${item.cidade}</td>
    <td>${item.trecho}</td>
    
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
  
  if  (sAeroporto.value == '' || sCidade.value == '' ||  sTrecho.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].aeroporto =sAeroporto.value
    itens[id].cidade = sCidade.value
    itens[id].trecho =  sTrecho.value
  } else {
    itens.push({'aeroporto': sAeroporto.value, 'cidade': sCidade.value, 'trecho':   sTrecho.value})
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
