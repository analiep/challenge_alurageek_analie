// Método para enviar os produtos para o json-server
async function enviarProdutoParaJsonServer(produto) {
    const url = 'http://localhost:3000/produtos'; // URL da API fake

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto) // Converte o objeto para JSON
    });

    if (!response.ok) {
        throw new Error('Erro ao enviar o produto para o servidor.');
    }

    const data = await response.json(); // Converte a resposta para JSON
    return data;
}

export { enviarProdutoParaJsonServer }; // Exporta a função para uso em outros arquivos

// Método para excluir um produto
async function excluirProduto(productId) {
    const url = `http://localhost:3000/produtos/${productId}`; // URL da API fake

    const response = await fetch(url, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error('Erro ao excluir o produto.');
    }

    console.log(`Produto com ID ${productId} excluído com sucesso.`);
}

export { excluirProduto }; // Exporta a função para uso em outros arquivos