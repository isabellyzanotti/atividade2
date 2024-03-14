var idMesa = document.getElementById("idMesa");
var btAddMesa = document.getElementById("btAddMesa");

btAddMesa.addEventListener('click', adicionarMesa)

function adicionarMesa() {

    let numero = document.querySelector("#numero");
    //console.log(numero.value);

    const valor = numero.value;

    const div = document.querySelector("#respostas");
    div.innerHTML += `<div class="divMesa"><img src="mesa.png" id="imgMesa"><p id="pMesa">Mesa ${valor} reservada com sucesso!</p></div>`


   // numero.innerHTML = `Mesa: ${numero.value} reservada`
    /*
    numero = idMesa;
    numero.innerHTML = `Mesa: ${numero} reservada`
*/
}

/*const paragrafo = document.querySelector('p')
paragrafo.addEventListener('Click', atualizaNome)
function atualizaNome(){
    const nome = prompt('Digite o nome');
    paragrafo.textContent = `Mesa: ${nome}`;
}

const span = document.querySelector('span')
span.addEventListener('click', adicionarMesa)
function adicionarMesa(){

    const nome = prompt('Digite o nome da mesa');

const elemento = document.creatElement('p')
elemento.classList.add('mesa')
const texto = document.createTextNode(`Mesa ${nome}`)

elemento.appendChild(texto)
document.querySelector('div.conteudo').appendChild(elemento);


}*/










