let listaDeAmigos = [];
let campoListaDeAmigos = document.getElementById('lista-amigos');
let sorteado = false;

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    if (nome) {
        listaDeAmigos.push(' ' + nome);
        campoListaDeAmigos.innerHTML = listaDeAmigos;
        document.getElementById('nome-amigo').value = '';
    } else {
        alert('preencha o nome')
    }
}

function sortear() {
    if (sorteado == false) {
        if (campoListaDeAmigos.innerHTML){
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
            alert('adicione amigos')
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