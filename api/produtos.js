export default function handler(req, res) {
  const produtos = [
    { id: 1, nome: "Carrinho", preco: 100 },
    { id: 2, nome: "Boneca", preco: 80 }
  ];

  if (req.method === 'GET') {
    res.status(200).json(produtos);
  } else {
    res.status(405).json({ mensagem: "Método não permitido" });
  }
}
