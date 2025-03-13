let precoTotalValor = 0
let precoTotal = document.getElementById("valor-total").innerHTML = `R$:${precoTotalValor}`;
let carrinho = document.querySelector(".carrinho__produtos__produto");
carrinho.innerHTML = "";

function somar(produto, quantidade){
    let precoProduto = produto * quantidade;
    
    precoTotalValor += precoProduto;
    document.getElementById("valor-total").innerHTML = `R$:${precoTotalValor}`;
}

function adicionarNoCarrinho(quantidade, nome, preco) {
    if (isNaN(quantidade) || quantidade <= 0 || !Number.isInteger(quantidade)){
        alert("Por favor insira uma quantidade positiva e inteira");
        return false;
    } 
    let produtosCarrinho = carrinho.children; 
    for (let i = 0; i < produtosCarrinho.length; i++) {
        if (produtosCarrinho[i].textContent.includes(nome)) {
            let quantidadeExistente = parseInt(produtosCarrinho[i].children[0].innerText); 
            quantidadeExistente += quantidade;
            produtosCarrinho[i].innerHTML = `<span class="texto-azul">${quantidadeExistente}x</span> ${nome} <span class="texto-azul">R$:${preco}</span>`;
            return true;
        }
    }
    let novoProduto = document.createElement("div");
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$:${preco}</span>`;
    carrinho.appendChild(novoProduto);
    return true;
}



function adicionar() {
    let produto = document.getElementById("produto");
    let quantidade = parseFloat(document.getElementById("quantidade").value);

    let opcaoSelecionada = produto.selectedIndex;
    
    let foneNome = "Fone"
    let fone = 100;
    let celularNome = "Celular"
    let celular = 1400;
    let oculusNome = "Oculus"
    let oculus = 5000;

    let produtoAdicionado = false; 

    if (opcaoSelecionada == 0) {
        produtoAdicionado = adicionarNoCarrinho(quantidade, foneNome, fone);
        if (produtoAdicionado) {
            somar(fone, quantidade); 
        }
    } else if (opcaoSelecionada == 1) {
        produtoAdicionado = adicionarNoCarrinho(quantidade, celularNome, celular);
        if (produtoAdicionado) {
            somar(celular, quantidade); 
        }
    } else {
        produtoAdicionado = adicionarNoCarrinho(quantidade, oculusNome, oculus);
        if (produtoAdicionado) {
            somar(oculus, quantidade); 
        }
    }
}

function limpar(){
    precoTotalValor = 0
    precoTotal = document.getElementById("valor-total").innerHTML = `R$:${precoTotalValor}`;
    carrinho.innerHTML = "";
}
