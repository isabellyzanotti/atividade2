var btAddPedido = document.getElementById("btAddPedido");




btAddPedido.addEventListener("click", adicionarPedido )


function adicionarPedido(){

    let pedido = document.querySelector("#pedido");

    const descricao = pedido.value;
    const div = document.querySelector("#mensagem");
    div.innerHTML += `<div class="divPedido"><img src="pedido.png" id="imgPedido"><p>Pedido: ${descricao} adicionado!</p></div>`

}


