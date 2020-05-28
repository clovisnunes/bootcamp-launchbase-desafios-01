calculaSaldo = (receitas, despesas) => (
    receitas - despesas
);

somaNumeros = (numeros) => (
    numeros.reduce((total, currentElement) => total + currentElement)
);

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

  usuarios.forEach(element => {
    const saldo = calculaSaldo(somaNumeros(element.receitas), somaNumeros(element.despesas));
      
    if(saldo > 0) {
        console.log(`${element.nome} possui saldo POSITIVO de ${saldo}.`);
    } else if (saldo < 0) {
        console.log(`${element.nome} possui saldo NEGATIVO de ${saldo}.`);
    } else {
        console.log(`${element.nome} não possui saldo (${saldo}).`);
    }
    
  })