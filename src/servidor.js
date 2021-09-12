const porta = 8085;

const express = require('express');
const app = express();
const bancoDeDados = require('./bancoDeDados');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))



app.get('/produtos', (req, res, next) => {
    //request getProdutos to get all produtos.
    res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
    //reuqest the product specified on the url.
    //params is on the requisition so we need to access req.
    //params will return all the params ...req.params
    //id is what is specified on the url, and how to req a specific id -> req.params.id
    res.send(bancoDeDados.getProduto(req.params.id))
});

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        //we will call salvarProduto to save and post.
        //body access everything that comes in the body of the req. -> req.body
        nome: req.body.nome,
        preco: req.body.preco
    })
    //we will return the produto como resposta.
    res.send(produto) // generate json
});

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        //you need the id to get specific produto
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    //we will return the produto como resposta.
    res.send(produto) // generate json
});

app.delete('/produtos/:id', (req, res, next) => {
    //pass the req.params.id that you will delete it.
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto) //json
});

app.listen(porta, () => {
    console.log(`Servidor nodemon executando na porta ${porta}`);
})