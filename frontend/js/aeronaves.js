const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sModelo = document.querySelector('#m-modelo')
const sFabricante = document.querySelector('#m-fabricante')
const sAnoFabricacao = document.querySelector('#m-anoFabricacao')
const sNumeroAssentos = document.querySelector('#m-numeroAssentos')
const sReferencia = document.querySelector('#m-referencia')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function sla(){
  console.log('Conexão bem sucedida')
}

function openModal(edit = false, index = 0) {
  modal.classList.add('active')
  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }
  if (edit) {
    sModelo.value = itens[index].modelo
    sFabricante.value = itens[index].fabricante
    sAnoFabricacao.value = itens[index].anoFabricacao
    sNumeroAssentos.value = itens[index].numeroAssentos
    sReferencia.value = itens[index].referencia
    id = index
  } else {
    sModelo.value = ''
    sFabricante.value = ''
    sAnoFabricacao.value = ''
    sNumeroAssentos.value = ''
    sReferencia.value = ''
  }
}

function editItem(index) {
  openModal(true, index)
}

function deleteItem(index) {
  fetch(`http://localhost:3000/deletarAeronave/${itens[index].ID}`, {method: 'DELETE'});
  location.reload();
}

function insertItem(item, index) {
  let tr = document.createElement('tr')
  tr.innerHTML = `
    <td>${item.ID}</td>
    <td>${item.modelo}</td>
    <td>${item.fabricante}</td>
    <td>${item.anoFabricacao}</td>
    <td>${item.numeroAssentos}</td>
    <td>${item.referencia}</td>
    
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
  if (sModelo.value == '' || sFabricante.value == ''|| sAnoFabricacao.value == '' || 
  sNumeroAssentos.value == '' || sReferencia.value == '') return
  e.preventDefault();

  if (id !== undefined) {
    fetch(`http://localhost:3000/editarAeronave/${itens[id].ID}/${sReferencia.value}/${sNumeroAssentos.value}/${sModelo.value}/${sFabricante.value}/${sAnoFabricacao.value}`, {method: 'PUT'})
    .then(response => response.json()).then(data => console.log(data));
    location.reload();
  } else {
    fetch(`http://localhost:3000/cadastrarAeronave/${sReferencia.value}/${sNumeroAssentos.value}/${sModelo.value}/${sFabricante.value}/${sAnoFabricacao.value}`, {method: 'PUT'})
    .then(response => response.json()).then(data => console.log(data));
    location.reload();
  }
  modal.classList.remove('active');
  id = undefined;
  location.reload();
}

function loadItens(dados) {
  let dado, aux = [];
  for(i in dados){
    dado = {
      "ID": `${dados[i][0]}`,
      "modelo": `${dados[i][1]}`,
      "fabricante": `${dados[i][2]}`,
      "anoFabricacao": `${dados[i][3]}`,
      "numeroAssentos": `${dados[i][4]}`,
      "referencia": `${dados[i][5]}`
    }
    aux.push(dado);
  };
  itens = aux;
  console.log(itens);
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
    console.log()
  })
}

// pegar os dados do banco
fetch('http://localhost:3000/listarAeronaves').then(response => response.json()).then(data => {
  loadItens(data);
});
