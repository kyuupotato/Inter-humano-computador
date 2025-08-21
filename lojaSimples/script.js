const carrinhoLista = document.getElementById("carrinho-lista");

function adicionarCarrinho(produto) {
  const item = document.createElement("li");
  item.textContent = produto;
  carrinhoLista.appendChild(item);
}
