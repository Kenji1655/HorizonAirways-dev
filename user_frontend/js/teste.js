function pegarCidades(){
    return fetch('http://localhost:3000/listarCidades')
    .then(response => {
        if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        data.sort();
        for(i in data){
            availableTags.push(data[i].join('-'));
            console.log(data[i].join('-'));
        }
        return availableTags;
    })
    .catch(error => {
        console.error('Erro ao recuperar dados da API:', error);
    });
}
