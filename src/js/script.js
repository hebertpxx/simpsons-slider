const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0;
const cartoes = document.querySelectorAll('li');

function ocultarCartao () {
    cartoes[cartaoAtual].dataset.status = 'unselected';
}

function mostrarCartao () {
    cartoes[cartaoAtual].dataset.status = 'selected';
}

function avancarCartao () {
    
    ocultarCartao();
    cartaoAtual++;
    if (cartaoAtual === cartoes.length) {
        cartaoAtual = 0;
    }
    mostrarCartao(cartaoAtual);

}

function voltarCartao () {

    ocultarCartao();
    cartaoAtual--;
    if (cartaoAtual === -1) {
        cartaoAtual = cartoes.length -1;
    }
    mostrarCartao();

}

btnAvancar.addEventListener('click', avancarCartao);
btnVoltar.addEventListener('click', voltarCartao);
