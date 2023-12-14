var modal = document.querySelector('.modal-container')
var tbody = document.querySelector('tbody')
var sModelo = document.getElementById('m-modelo')
var sOrigem = document.getElementById('m-origem')
var sDestino = document.getElementById('m-destino')
var btnSalvar = document.querySelector('#btnSalvar')

var itens
var id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')
  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }
  if (edit) {
    sOrigem.value = itens[index].origem
    sDestino.value = itens[index].destino
    id = index
  } else {
    sOrigem.value = ''
    sDestino.value = ''
  }
}

function editItem(index) {
  openModal(true, index)
}

function deleteItem(index) {
  fetch(`http://localhost:3000/deletarTrecho/${itens[index].ID}`, {method: 'DELETE'});
  location.reload();
}

function insertItem(item, index) {
  let tr = document.createElement('tr')
  tr.innerHTML = `
    <td>${item.ID}</td>
    <td>${item.origem}</td>
    <td>${item.destino}</td>
    
    <td class="acao">
      <button onclick="editItem(${index})"><i class="bi bi-pencil-square"></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class="bi bi-trash"></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  if (sOrigem.value == '' || sDestino.value == '') return
  e.preventDefault();

  // if (id !== undefined) {
  //   fetch(`http://localhost:3000/editarAeronave/${itens[id].ID}/${sReferencia.value}/${sNumeroAssentos.value}/${sModelo.value}/${sFabricante.value}/${sAnoFabricacao.value}`, {method: 'PUT'})
  //   .then(response => response.json()).then(data => console.log(data));
  //   location.reload();
  // } else {
  //   fetch(`http://localhost:3000/cadastrarAeronave/${sReferencia.value}/${sNumeroAssentos.value}/${sModelo.value}/${sFabricante.value}/${sAnoFabricacao.value}`, {method: 'PUT'})
  //   .then(response => response.json()).then(data => console.log(data));
  //   location.reload();
  // }
  modal.classList.remove('active');
  id = undefined;
  location.reload();
}

function loadItens(dados) {
  let dado, aux = [];
  for(i in dados){
    dado = {
      "ID": `${dados[i][0]}`,
      "origem": `${dados[i][1]}`,
      "destino": `${dados[i][2]}`
    }
    aux.push(dado);
  };
  itens = aux;
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}

// pegar os dados do banco
fetch('http://localhost:3000/listarTrechos').then(response => response.json()).then(data => {
  loadItens(data);
});
