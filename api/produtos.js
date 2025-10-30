

const express = require('express');
const app = express();

app.use(express.json());


const produtos = [
  {
    id: 1,
    nome: "Boneco Exclusivo O Herói",
    preco: 399.90,
    descricao: "Edição limitada 2024.",
    imagem: "img/heroi.jpg"
  },
  {
    id: 2,
    nome: "Kit Mega Construtor",
    preco: 129.90,
    descricao: "Desenvolve a criatividade e coordenação.",
    imagem: "img/construir.jpg"
  },
  {
    id: 3,
    nome: "Mini-Figuras Liga Estelar",
    preco: 179.90,
    descricao: "Conjunto de mini-figuras com base de exibição.",
    imagem: "img/liga.jpg"
  }
];


app.get('/produtos', (req, res) => {
  res.json(produtos);
});


app.get('/produtos/:id', (req, res) => {
  const produto = produtos.find(p => p.id == req.params.id);
  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ erro: "Produto não encontrado" });
  }
});


app.get('/hello', (req, res) => {
  res.json({ message: 'API da loja-toylandia funcionando!' });
});


module.exports = app;
