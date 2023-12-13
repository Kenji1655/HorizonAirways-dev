const menuItem = document.querySelectorAll('.item-menu');
const conteudo = document.getElementById('content');
    
function preencher_conteudo(){
    var aba = document.querySelector('.item-menu.ativo').id;
    console.log(aba);
    conteudo.innerHTML = '';
    if(aba == 'aeronaves'){
        conteudo.innerHTML = `
        <div class="container">
            <div class="header">
                <span>Aeronaves</span>
                <span>
                    <button onclick="sla()" id="new">Incluir</button>
                </span>
            </div>
            <div class="divTable">
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Modelo</th>
                            <th>Fabricante</th>
                            <th>Ano de fabricação</th>
                            <th>Número de Assentos</th>
                            <th>Indentificação</th>
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
                        <label for="m-trecho">Trecho</label>
                        <input id="m-trecho" type="text" required />
                
                        <label for="m-data">Data</label>
                        <input id="m-data" type="date" required />

                        <label for="m-valor">Valor</label>
                        <input id="m-valor" type="number" required />

                        <label for="m-assento">Assento</label>
                        <input id="m-assento" type="text" required />
                        <button id="btnSalvar">Salvar</button>
                    </form>
                </div>
      </div>
        </div>`;
    }
    if(aba == 'aeroportos'){
        conteudo.innerHTML = `
        <div class="container">
            <div class="header">
                <span>Aeroportos</span>
                <span>
                    <button onclick="sla()" id="new">Incluir</button>
                </span>
            </div>
            <div class="divTable">
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Aeroporto⠀⠀⠀⠀⠀⠀⠀⠀⠀</th>
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
        </div>`;
    }
    if(aba == 'log-out'){
        var op;
        op = alert('Deseja sair da página de Administrador?');
        console.log(op);
        // window.location.href = 'home.html';
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
