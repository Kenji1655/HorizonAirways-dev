const menuItem = document.querySelectorAll('.item-menu');
const conteudo = document.getElementById('content');
    
function preencher_conteudo(){
    var aba = document.querySelector('.item-menu.ativo').id;
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
                    <tbody>
                    <tr>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td class="acao">
                        <button onclick="editItem()"><i class="bi bi-pencil-square"></i></button>
                        </td>
                        <td class="acao">
                        <button onclick="deleteItem()"><i class="bi bi-trash"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td class="acao">
                        <button onclick="editItem()"><i class="bi bi-pencil-square"></i></button>
                        </td>
                        <td class="acao">
                        <button onclick="deleteItem()"><i class="bi bi-trash"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td class="acao">
                        <button onclick="editItem()"><i class="bi bi-pencil-square"></i></button>
                        </td>
                        <td class="acao">
                        <button onclick="deleteItem()"><i class="bi bi-trash"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td>valor</td>
                        <td class="acao">
                        <button onclick="editItem()"><i class="bi bi-pencil-square"></i></button>
                        </td>
                        <td class="acao">
                        <button onclick="deleteItem()"><i class="bi bi-trash"></i></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
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
                            <th>Aeroporto</th>
                            <th>Sigla</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>País</th>
                            <th class="acao">Editar</th>
                            <th class="acao">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>valor</td>
                            <td>valor</td>
                            <td>valor</td>
                            <td>valor</td>
                            <td>valor</td>
                            <td>valor</td>
                            <td class="acao">
                            <button onclick="editItem()"><i class="bi bi-pencil-square"></i></button>
                            </td>
                            <td class="acao">
                            <button onclick="deleteItem()"><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>valor</td>
                            <td>valor</td>
                            <td>valor</td>
                            <td>valor</td>
                            <td>valor</td>
                            <td>valor</td>
                            <td class="acao">
                            <button onclick="editItem()"><i class="bi bi-pencil-square"></i></button>
                            </td>
                            <td class="acao">
                            <button onclick="deleteItem()"><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`;
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
var container = document.querySelector('body');

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir');
    container.classList.toggle('contraido')
});
