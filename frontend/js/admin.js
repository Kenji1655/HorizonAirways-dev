const menuItem = document.querySelectorAll('.item-menu');
const conteudo = document.getElementById('content');
    
function preencher_conteudo(){
    var aba = document.querySelector('.item-menu.ativo').id;
    var script = document.getElementById('addScript');
    if(script){
        var head = document.querySelector('head');
        head.removeChild(script);
    }
    conteudo.innerHTML = '';
    if(aba == 'aeronaves'){
        conteudo.innerHTML = `
        <div class="container">
            <div class="header">
                <span>Aeronaves</span>
                <span>
                    <button onclick="openModal()" id="new">Incluir</button>
                </span>
            </div>
            <div class="divTable">
                <table>
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
                </table>
            </div>
            <div class="modal-container">
                <div class="modal">
                    <form>
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
                    </form>
                </div>
            </div>
        </div>`;
        var imported = document.createElement('script');
        imported.src = 'js/aeronaves.js';
        imported.id = 'addScript';
        document.head.appendChild(imported);
    }
    if(aba == 'aeroportos'){
        conteudo.innerHTML = `
        <div class="container">
            <div class="header">
                <span>Aeroportos</span>
                <span>
                    <button onclick="openModal()" id="new">Incluir</button>
                </span>
            </div>
            <div class="divTable">
                <table>
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
                </table>
            </div>
            <div class="modal-container">
                <div class="modal">
                    <form>
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
                    </form>
                </div>
            </div>
        </div>`;
        var imported = document.createElement('script');
        imported.src = 'js/aeroportos.js';
        imported.id = 'addScript';
        document.head.appendChild(imported);
    }
    if(aba == 'trechos'){
        fetch('http://localhost:3000/listarAeroportos').then(response => response.json()).then(data => {
            loadItens(data);
            var texto = `
            <div class="container">
                <div class="header">
                    <span>Trechos</span>
                    <span>
                        <button onclick="openModal()" id="new">Incluir</button>
                    </span>
                </div>
                <div class="divTable">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Aeroporto de Origem</th>
                                <th>Aeroporto de Destino</th>
                                <th class="acao">Editar</th>
                                <th class="acao">Excluir</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="modal-container">
                    <div class="modal">
                        <form>
                            <label for="m-origem">Aeroporto de Origem</label>
                            <select name="m-origem" id="m-origem" required>
                                `
            for(i in data){
                texto = texto + `<option value="${data[i][1]}">${data[i][1]}</option>`;
            }
            texto = texto +`
                            </select>
                            <br><br>

                            <label for="m-destino">Aeroporto de Destino</label>
                            <select name="m-destino" id="m-destino" required>
                                `
            for(i in data){
                texto = texto + `<option value="${data[i][1]}">${data[i][1]}</option>`;
            }
            texto = texto +`
                            </select>
                            <br><br>

                            <button id="btnSalvar">Salvar</button>
                        </form>
                    </div>
                </div>
            </div>`;
            conteudo.innerHTML = texto;
            var imported = document.createElement('script');
            imported.src = 'js/trechos.js';
            imported.id = 'addScript';
            document.head.appendChild(imported);
        });
    }
    if(aba == 'log-out'){
        var op;
        op = window.confirm('Deseja sair da página de Administrador?')
        if(op)window.location.href = 'login.html';
    }
}

function selectLink(){
    menuItem.forEach((item)=>item.classList.remove('ativo'));
    this.classList.add('ativo');
    preencher_conteudo();
};

preencher_conteudo()

menuItem.forEach((item)=>item.addEventListener('click', selectLink));

var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');
var body = document.querySelector('body');

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir');
    body.classList.toggle('menuAberto')
});
