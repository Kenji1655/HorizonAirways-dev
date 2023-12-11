const assentos = document.getElementById('assentos');

var qtde = window.prompt('Quantos assentos quer colocar?');
var linhas = qtde / 6;

function insertItem(linha, quantidade) {
    console.log('Função chamada');
    let colunas = document.createElement('il')
    let textoHtml;
    textoHtml = `
    <ol class="seats">`;
    if(quantidade>=1){
        textoHtml = textoHtml + `
        <li class="seat">
            <input type="checkbox" id="${linha}A" />
            <label for="${linha}A">${linha}A</label>
        </li>`;
    }
    if(quantidade>=2){
        textoHtml = textoHtml + `
        <li class="seat">
            <input type="checkbox" id="${linha}B" />
            <label for="${linha}B">${linha}B</label>
        </li>`;
    }
    if(quantidade>=3){
        textoHtml = textoHtml + `
        <li class="seat">
            <input type="checkbox" id="${linha}C" />
            <label for="${linha}C">${linha}C</label>
        </li>`;
    }
    if(quantidade>=4){
        textoHtml = textoHtml + `
        <li class="seat">
            <input type="checkbox" id="${linha}D" />
            <label for="${linha}D">${linha}D</label>
        </li>`;
    }
    if(quantidade>=5){
        textoHtml = textoHtml + `
        <li class="seat">
            <input type="checkbox" id="${linha}E" />
            <label for="${linha}E">${linha}E</label>
        </li>`;
    }
    if(quantidade>=6){
        textoHtml = textoHtml + `
        <li class="seat">
            <input type="checkbox" id="${linha}F" />
            <label for="${linha}F">${linha}F</label>
        </li>`;
    }
    textoHtml = textoHtml + `
    </ol>`;
    colunas.innerHTML = textoHtml;
    assentos.appendChild(colunas);
}

console.log(linhas);
for(var i=1; i<=linhas+1; i++){
    insertItem(i, qtde);
    qtde -= 6;
}
