const fn = (nome: string, idade?: number) => {
    if (!idade) {
      return `nome: ${nome}, idade: sem valor definido`;
    }
  
    return `nome: ${nome}, idade: ${idade}`;
  };
  
  console.log(fn("Sérgio", 31));
  console.log(fn("Sérgio"));
  
  const pessoa: { nome: string; idade?: number } = { nome: "Sérgio", idade: 31 };