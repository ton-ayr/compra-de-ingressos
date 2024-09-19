function comprarIngresso() {
    const lote = document.getElementById("tipo-ingresso").value;
    const quantidade = parseInt(document.getElementById("qtd").value);

    const estoqueDisponivel = parseInt(document.getElementById(`qtd-${lote}`).textContent);

    // Verifica se a quantidade desejada está disponível no estoque
    if (quantidade > estoqueDisponivel) {
        alert('Quantidade indisponível para compra');
    } else {
        // Atualiza o estoque após a compra
        const novoEstoque = estoqueDisponivel - quantidade;
        document.getElementById(`qtd-${lote}`).textContent = novoEstoque;
        alert('Compra realizada!');
    }
}