const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sAeroporto = document.querySelector('#m-aeroporto')
const sSigla = document.querySelector('#m-sigla')
const sCidade = document.querySelector('#m-cidade')
const sEstado = document.querySelector('#m-estado')
const sPais = document.querySelector('#m-pais')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')
  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }
  if (edit) {
    sAeroporto.value = itens[index].aeroporto
    sSigla.value = itens[index].sigla
    sCidade.value = itens[index].cidade
    sEstado.value = itens[index].estado
    sPais.value = itens[index].pais
    id = index
  } else {
    sAeroporto.value = ''
    sSigla.value = ''
    sCidade.value = ''
    sEstado.value = ''
    sPais.value = ''
  }
}

function editItem(index) {
  openModal(true, index)
}

function deleteItem(index) {
  fetch(`http://localhost:3000/deletarAeroporto/${itens[index].ID}`, {method: 'DELETE'});
  location.reload();
}

function insertItem(item, index) {
  let tr = document.createElement('tr')
  tr.innerHTML = `
    <td>${item.ID}</td>
    <td>${item.aeroporto}</td>
    <td>${item.sigla}</td>
    <td>${item.cidade}</td>
    <td>${item.estado}</td>
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
  
  if  (sAeroporto.value == '' || sSigla.value == ''|| sCidade.value == '' || sEstado.value == '' || sPais.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    fetch(`http://localhost:3000/editarAeroporto/${itens[id].ID}/${sAeroporto.value}/${sSigla.value}/${sCidade.value}/${sEstado.value}/${sPais.value}`, {method: 'PUT'})
    .then(response => response.json()).then(data => console.log(data));
    location.reload();
  } else {
    fetch(`http://localhost:3000/cadastrarAeroporto/${sAeroporto.value}/${sSigla.value}/${sCidade.value}/${sEstado.value}/${sPais.value}`, {method: 'PUT'})
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
      "aeroporto": `${dados[i][1]}`,
      "sigla": `${dados[i][2]}`,
      "cidade": `${dados[i][3]}`,
      "estado": `${dados[i][4]}`,
      "pais": `${dados[i][5]}`
    }
    aux.push(dado);
  };
  itens = aux;
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
    console.log()
  })
}

fetch('http://localhost:3000/listarAeroportos').then(response => response.json()).then(data => {
  loadItens(data);
});