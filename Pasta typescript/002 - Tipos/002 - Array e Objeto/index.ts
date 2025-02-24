// tuplas
let array1: [string, string, number, boolean] = [
    "Sérgio Soares",
    "Teste",
    123,
    false,
  ];
  
  let array2: Array<string | number | boolean> = [
    true,
    "Sérgio",
    123,
    "Soares",
  ];
  
  let obj1: { nome: string; sobrenome: string; idade: number; deuBom: boolean } =
    {
      nome: "Sérgio",
      sobrenome: "Soares",
      idade: 123,
      deuBom: true,
    };
  
  let obj2: Array<{
    nome: string;
    sobrenome: string;
    idade: number;
    deuBom: boolean;
  }> = [
    {
      nome: "Sérgio",
      sobrenome: "Soares",
      idade: 123,
      deuBom: true,
    },
    {
      nome: "Sérgio1",
      sobrenome: "Soares",
      idade: 123,
      deuBom: true,
    },
    {
      nome: "Sérgio2",
      sobrenome: "Soares",
      idade: 456,
      deuBom: false,
    },
  ];
  
  console.log(array1);
  console.log(array2);
  console.log(obj1);
  console.log(obj2);