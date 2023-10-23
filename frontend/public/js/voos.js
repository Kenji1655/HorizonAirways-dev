const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sId = document.querySelector('#m-idpassagem')
const sOrigem = document.querySelector('#m-origem')
const sDestino = document.querySelector('#m-destino')
const sData = document.querySelector('#m-data')
const sValor = document.querySelector('#m-valor')
const sAssento = document.querySelector('#m-assento')
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
    sId.value = itens[index].idpassagem
    sOrigem.value = itens[index].origem
    sDestino.value = itens[index].destino
    sData.value = itens[index].data
    sValor.value = itens[index].valor
    sAssento.value = itens[index].assento
    id = index
  } else {
    sId.value = ''
    sOrigem.value = ''
    sDestino.value = ''
    sData.value = ''
    sValor.value = ''
    sAssento.value = ''
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
    <td>${item.idpassagem}</td>
    <td>${item.origem}</td>
    <td>${item.destino}</td>
    <td>${item.data}</td>
    <td>R$ ${item.valor}</td>
    <td>${item.assento}</td>
    
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
  
  if (sId.value == '' || sOrigem.value == '' || sDestino.value == ''|| sData.value == ''|| sValor.value == ''|| sAssento.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].idpassagem = sId.value
    itens[id].origem = sOrigem.value
    itens[id].destino = sDestino.value
    itens[id].data = sData.value
    itens[id].valor = sValor.value
    itens[id].assento = sAssento.value
  } else {
    itens.push({'idpassagem': sId.value, 'origem': sOrigem.value, 'destino': sDestino.value, 'data': sData.value, 'valor': sValor.value, 'assento': sAssento.value})
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
