function pegarAeronaves(){
    return fetch('http://localhost:3000/listarAeronaves')
    .then(response => {
        if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        console.error('Erro ao recuperar dados da API:', error);
    });
}

var sla = [];
sla = pegarAeronaves();
console.log(sla);