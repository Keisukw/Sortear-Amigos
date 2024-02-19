let listaDeAmigos = [];
let campoListaDeAmigos = document.getElementById('lista-amigos');
let sorteado = false;

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    if (listaDeAmigos.includes(nome)) {
        alert('o nome já está incluído');
    } else {
        if (nome) {
            listaDeAmigos.push(nome);
            campoListaDeAmigos.innerHTML += '<span onclick="excluir(\'' + nome + '\')" >' + nome + '</span> ';
            document.getElementById('nome-amigo').value = '';
        } else {
            alert('preencha o nome')
        }   
    }
    console.log(listaDeAmigos);
    console.log(document.getElementById('lista-amigos'))
}

function excluir(nome) {
    let index = listaDeAmigos.indexOf(nome);
    if (index !== -1) {
        listaDeAmigos.splice(index, 1);
        atualizarListaAmigos();
        alert('Amigo excluído com sucesso.');
    }
    console.log(listaDeAmigos);
    console.log(document.getElementById('lista-amigos'))
}

function atualizarListaAmigos() {
    campoListaDeAmigos.innerHTML = ''; // Limpa o conteúdo atual
    for (let i = 0; i < listaDeAmigos.length; i++) {
        campoListaDeAmigos.innerHTML += '<span onclick="excluir(\'' + listaDeAmigos[i] + '\')" >' + listaDeAmigos[i] + '</span> ';
    }
}

function sortear() {
    if (sorteado == false) {
        if (campoListaDeAmigos.innerHTML && listaDeAmigos.length >= 4){
            if(listaDeAmigos.length % 2 == 0){
                sorteado = true;

                let sorteio = document.getElementById('lista-sorteio');
                sorteio.innerHTML = '';

                let amigosDisponiveis = listaDeAmigos.slice();//copia da lista de amigos
            
                while (amigosDisponiveis.length >= 2) {
                    let indiceAmigo1 = embaralhar(amigosDisponiveis.length);
                    let amigo1 = amigosDisponiveis.splice(indiceAmigo1, 1);//remove da posicao 0

                    let indiceAmigo2 = embaralhar(amigosDisponiveis.length);
                    let amigo2 = amigosDisponiveis.splice(indiceAmigo2, 1);
                
                    let p = document.createElement('p');
                    let p2 = document.createElement('p');
                    p.innerHTML = amigo1 + ' --> ' + amigo2;
                    p2.innerHTML = amigo2 + ' --> ' + amigo1;
                    sorteio.appendChild(p);
                    sorteio.appendChild(p2);
                }
            } else {
                alert('adicione mais um amigo, para não sobrar');
            }
        } else{
            alert('adicione mais amigos')
        }
    } else {
        alert('you wish draw again?');
        sorteado = false;
        sortear();
    }
}

function embaralhar(max) { 
    let numero = Math.floor(Math.random() * max);
    return numero;
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    campoListaDeAmigos.innerHTML = '';
    listaDeAmigos = [];
    sorteado = false;
    document.getElementById('lista-sorteio').innerHTML = '';
}   