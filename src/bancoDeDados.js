const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {};

function salvarProduto(produto){
    // if product id is not set, set it as the sequence id.
    if(!produto.id) produto.id = sequence.id;
    //produto (our obj) produto.id receives the value of produto
    //if produto is set, it returns produto, otherwise it will set a new produto
    produtos[produto.id] = produto;

    return produto;
}

function getProduto(id){
    //get one produto
    //return the produto if set, otherwise returns an empty obj.
    return produtos[id] || {}
}

function getProdutos(){
    //get all produtos
    //we will only return the values of the obj.
    return Object.values(produtos)
}

function excluirProduto(id){
    //you have to pass the id of the produto you want to delete.
    const produto = produtos[id] //this is optional.
    //delete selected produto.
    delete produtos[id];
    return produto;
}

//make sure to make these methods available to other modules in node.
module.exports = { salvarProduto, getProduto,  getProdutos, excluirProduto }