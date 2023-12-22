var dado, itensAeronaves = [], itensAeroportos = [], itensVoos = [];
// Função que preenche o conteudo da página sem considerar o menu lateral
function preencher_conteudo(){
    // Verifica qual dos icones do menu lateral foi selecionado e guarda na variavel aba
    var aba = document.querySelector('.item-menu.ativo').id;
    // Cria o conteudo html padrão de cada uma das abas
    document.getElementById('content').innerHTML = `
    <div class="container">
        <div class="header">
            <span>${aba}</span>
            <span>
                <button onclick="openModal()" id="new">Incluir</button>
            </span>
        </div>
        <div class="divTable"></div>
        <div class="modal-container">
            <div class="modal"></div>
        </div>
    </div>
    `;
    // Adicionando uma tag script para adicionar a relação com o crud.js no html
    var script = document.getElementById('addScript');
    if(script){
        var head = document.querySelector('head');
        head.removeChild(script);
    };
    if(aba == 'Aeronaves'){
        var conteudoTable = document.createElement('table');
        var conteudoMocal = document.createElement('form');
        conteudoTable.innerHTML = `
            <thead>
                <tr>
                    <th>ID⠀⠀⠀</th>
                    <th>Modelo⠀⠀⠀⠀⠀⠀</th>
                    <th>Fabricante⠀⠀⠀⠀⠀⠀</th>
                    <th>Ano de fabricação</th>
                    <th>Número de Assentos⠀⠀⠀</th>
                    <th>Número de Identificação</th>
                    <th class="acao">Editar</th>
                    <th class="acao">Excluir</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        conteudoMocal.innerHTML = `
            <label for="m-modelo">Modelo</label>
            <input id="m-modelo" type="text" required />
            
            <label for="m-fabricante">Fabricante</label>
            <select name="m-fabricante" id="m-fabricante" required>
                <option value="Embraer">Embraer</option>
                <option value="Boeing">Boeing</option>
                <option value="AirBus">AirBus</option>
                <option value="Lockheed">Lockheed</option>
                <option value="Antonov">Antonov</option>
                <option value="ATR">ATR</option>
                <option value="Avro">Avro</option>
                <option value="BAC">BAC</option>
                <option value="Bombardier">Bombardier</option>
                <option value="Convair">Convair</option>
                <option value="Convair">Fokker</option>
            </select>
            <br><br>
            
            <label for="m-anoFabricacao">Ano de fabricação</label>
            <input id="m-anoFabricacao" type="text" required />
            
            <label for="m-numAssentos">Número de Assentos</label>
            <input id="m-numAssentos" type="text" required />
            
            <label for="m-numId">Número de Identificação</label>
            <input id="m-numId" type="text" required />

            <button id="btnSalvar">Salvar</button>
        `;
        document.querySelector('.divTable').appendChild(conteudoTable);
        document.querySelector('.modal').appendChild(conteudoMocal);
        var tbody = document.querySelector('tbody');
        itensAeronaves.forEach((item, index) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.ID}</td>
                <td>${item.modelo}</td>
                <td>${item.fabricante}</td>
                <td>${item.anoFabricacao}</td>
                <td>${item.numeroAssentos}</td>
                <td>${item.referencia}</td>
                <td class="acao">
                <button onclick="editItem(${index})"><i class="bi bi-pencil-square"></i></button>
                </td>
                <td class="acao">
                <button onclick="deleteItem(${index})"><i class="bi bi-trash"></i></button>
                </td>
            `;
            tr.className = 'linha';
            tbody.appendChild(tr);
        });
    }
    if(aba == 'Aeroportos'){
        var conteudoTable = document.createElement('table');
        var conteudoMocal = document.createElement('form');
        conteudoTable.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Aeroporto⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</th>
                    <th>Sigla</th>
                    <th>Cidade⠀⠀⠀</th>
                    <th>Estado</th>
                    <th>País⠀⠀⠀</th>
                    <th class="acao">Editar</th>
                    <th class="acao">Excluir</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        conteudoMocal.innerHTML = `
            <label for="m-aeroporto">Aeroporto</label>
            <input id="m-aeroporto" type="text" required />
            
            <label for="m-sigla">Sigla</label>
            <input id="m-sigla" type="text" required />
            
            <label for="m-cidade">Cidade</label>
            <input id="m-cidade" type="text" required />
            
            <label for="m-estado">Estado</label>
            <input id="m-estado" type="text" required />
            
            <label for="m-pais">País</label>
            <input id="m-pais" type="text" required />

            <button id="btnSalvar">Salvar</button>
        `;
        document.querySelector('.divTable').appendChild(conteudoTable);
        document.querySelector('.modal').appendChild(conteudoMocal);
        var tbody = document.querySelector('tbody')
        itensAeroportos.forEach((item, index) => {
            let tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${item.ID}</td>
                <td>${item.aeroporto}</td>
                <td>${item.sigla}</td>
                <td>${item.cidade}</td>
                <td>${item.estado}</td>
                <td>${item.pais}</td>
                <td class="acao">
                <button onclick="editItem(${index})"><i class="bi bi-pencil-square"></i></button>
                </td>
                <td class="acao">
                <button onclick="deleteItem(${index})"><i class="bi bi-trash"></i></button>
                </td>
            `
            tbody.appendChild(tr)
        });
    }
    if(aba == 'Voos'){
        var conteudoTable = document.createElement('table');
        var conteudoMocal = document.createElement('form');
        conteudoTable.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Origem⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</th>
                    <th>Destino⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</th>
                    <th>Data e Hora de Partida</th>
                    <th>Data e Hora de Chegada</th>
                    <th>Aeronave</th>
                    <th class="acao">Editar</th>
                    <th class="acao">Excluir</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        conteudoMocal.innerHTML = `
            <label for="m-aeroporto">Aeroporto</label>
            <input id="m-aeroporto" type="text" required />

            <button id="btnSalvar">Salvar</button>
        `;
        document.querySelector('.divTable').appendChild(conteudoTable);
        document.querySelector('.modal').appendChild(conteudoMocal);
        var tbody = document.querySelector('tbody')
        itensVoos.forEach((item, index) => {
            let tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${item.ID}</td>
                <td>${item.origem}</td>
                <td>${item.destino}</td>
                <td>${item.dthPartida}</td>
                <td>${item.dthChegada}</td>
                <td>${item.aeronave}</td>
                <td class="acao">
                <button onclick="editItem(${index})"><i class="bi bi-pencil-square"></i></button>
                </td>
                <td class="acao">
                <button onclick="deleteItem(${index})"><i class="bi bi-trash"></i></button>
                </td>
            `
            tbody.appendChild(tr)
        });
    }
    if(aba == 'Conta'){
        document.getElementById('content').innerHTML = ``
    }
    var imported = document.createElement('script');
    imported.src = 'js/crud.js';
    imported.id = 'addScript';
    document.head.appendChild(imported);
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
    var aba = document.querySelector('.item-menu.ativo').id;
    if(aba == 'Aeronaves'){
        fetch(`http://localhost:3000/deletarAeronave/${itensAeronaves[index].ID}`, {method: 'DELETE'});
        itensAeronaves.splice(index, 1);
    }
    if(aba == 'Aeroportos'){
        fetch(`http://localhost:3000/deletarAeroporto/${itensAeronaves[index].ID}`, {method: 'DELETE'});
        itensAeroportos.splice(index, 1);
    }
    if(aba == 'Voos'){
        fetch(`http://localhost:3000/deletarVoo/${itensAeronaves[index].ID}`, {method: 'DELETE'});
        itensVoos.splice(index, 1);
    }
    preencher_conteudo();
}

fetch(`http://localhost:3000/listarAeronaves`).then(response => response.json()).then(data => {
for(i in data){
    dado = {
        "ID": `${data[i][0]}`,
        "modelo": `${data[i][1]}`,
        "fabricante": `${data[i][2]}`,
        "anoFabricacao": `${data[i][3]}`,
        "numeroAssentos": `${data[i][4]}`,
        "referencia": `${data[i][5]}`
    }
    itensAeronaves.push(dado);
};
fetch(`http://localhost:3000/listarAeroportos`).then(response => response.json()).then(data => {
for(i in data){
    dado = {
        "ID": `${data[i][0]}`,
        "aeroporto": `${data[i][1]}`,
        "sigla": `${data[i][2]}`,
        "cidade": `${data[i][3]}`,
        "estado": `${data[i][4]}`,
        "pais": `${data[i][5]}`
    }
    itensAeroportos.push(dado);
};
fetch(`http://localhost:3000/listarVoos`).then(response => response.json()).then(data => {
for(i in data){
    dado = {
        "ID": `${data[i][0]}`,
        "origem": `${data[i][1]}`,
        "destino": `${data[i][2]}`,
        "dthPartida": `${data[i][3]}`,
        "dthChegada": `${data[i][4]}`,
        "aeronave": `${data[i][5]}`
    }
    itensVoos.push(dado);
};

document.querySelector('body').innerHTML = `
<!-- Configurações do menu lateral -->
<nav class="menu-lateral">
    <!-- Adicionando o icone da Horizon Airlines -->
    <div class="sidebar-logo">
        <img src="./assets/img/logo-nome.png">
    </div>
    <!-- Adicionando o icone do botão expandir -->
    <div class="btn-expandir">
        <i class="bi bi-list" id="btn-exp"></i>
    </div>
    <!-- Adicionando os icones do menu lateral -->
    <ul>
        <li class="item-menu ativo" id="Aeronaves">
            <a href="#">
                <span class="icon"><i class="bi bi-airplane"></i></span>
                <span class="txt-link">Aeronaves</span>
            </a>
        </li>
        <li class="item-menu" id="Aeroportos">
            <a href="#">
                <span class="icon"><i class="bi bi-pin-map"></i></span>
                <span class="txt-link">Aeroportos</span>
            </a>
        </li>
        <li class="item-menu" id="Voos">
            <a href="#">
                <span class="icon"><i class="bi bi-ticket-perforated"></i></span>
                <span class="txt-link">Voos</span>
            </a>
        </li>
        <li class="item-menu" id="Conta">
            <a href="#">
                <span class="icon"><i class="bi bi-person-circle"></i></span>
                <span class="txt-link">Conta</span>
            </a>
        </li>
    </ul>
</nav>
<div id="content"></div>
`;

var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');
var body = document.querySelector('body');

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir');
    body.classList.toggle('menuAberto')
});

function selecionarAba(){
    menuItem.forEach((item)=>item.classList.remove('ativo'));
    this.classList.add('ativo');
    preencher_conteudo(itensAeronaves, itensAeroportos, itensVoos);
};
const menuItem = document.querySelectorAll('.item-menu');
menuItem.forEach((item)=>item.addEventListener('click', selecionarAba));

preencher_conteudo(itensAeronaves, itensAeroportos, itensVoos);
});
});
});
