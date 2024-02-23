const form = document.getElementById('my-form');
const contatos = [];
const tels = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const cont = document.getElementById('nome');
    const tell = document.getElementById('celular');

    if(contatos.includes(cont.value)) {
        alert(`O contato: ${cont.value} ja foi inserido.`);
    } 
    
    else if (tels.includes(tell.value)){
        alert(`O numero: ${tell.value} ja foi inserido.`)
    }

    else {
    contatos.push(cont.value);
    tels.push(tell.value);

    let linha = '<tr>';
    linha += `<td>${tell.value}</td>`;
    linha += `<td>${cont.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    cont.value = '';
    tell.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
