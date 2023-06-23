const produtos = [
    { nome: 'Carro 1', valor: 10.99 },
    { nome: 'Carro 2', valor: 19.99 },
    { nome: 'Carro 3', valor: 5.99 },
    { nome: 'Carro 4', valor: 8.99 }
  ];
  
  produtos.sort((a, b) => b.valor - a.valor);
  
  console.log(produtos);
  