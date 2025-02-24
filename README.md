# 📘 Aprendizado em TypeScript

Este repositório contém meus estudos e experimentos em TypeScript, abordando conceitos básicos, boas práticas e exemplos práticos para reforçar o aprendizado.

---

## 📌 Sumário

### 🔹 Introdução ao TypeScript
1. [Configuração Inicial](#configuração-inicial)
2. [Tipos Primitivos](#tipos-primitivos)
3. [Arrays e Objetos](#arrays-e-objetos)
4. [Any e Union Types](#any-e-union-types)
5. [Tipos Especiais: Void e Never](#tipos-especiais-void-e-never)
6. [Type Aliases](#type-aliases)
7. [String Literal Types](#string-literal-types)
8. [Parâmetros Opcionais](#parâmetros-opcionais)
9. [Enum](#enum)

---

## 🔹 Configuração Inicial

Antes de começar, é necessário instalar o TypeScript globalmente:
```bash
npm install -g typescript
```

Para inicializar um projeto TypeScript:
```bash
tsc --init
```

Para rodar o código TypeScript diretamente:
```bash
npm i -g ts-node
```

Executando arquivos `.ts`:
```bash
ctrl + alt + n
```

Exemplo de código básico em TypeScript:
```typescript
const pedido = (pedido: string): string => {
  return `Seu pedido foi recebido: ${pedido}`;
};
console.log(pedido("1234"));
```

---

## 🔹 Tipos Primitivos

O TypeScript adiciona tipagem ao JavaScript, garantindo mais segurança ao código.

```typescript
let pedido: string = "Pizza";
pedido = "Hambúrguer";

let numero: number = 123;
numero = 456;

let statusPedido: boolean = true;
statusPedido = false;
```

---

## 🔹 Arrays e Objetos

Podemos definir arrays e objetos com tipos específicos:

```typescript
let listaPedidos: string[] = ["Pizza", "Hambúrguer", "Suco"];

let cliente: { nome: string; idade: number } = {
  nome: "Sérgio",
  idade: 30,
};
```

Também podemos usar tuplas:
```typescript
let pedido: [string, number, boolean] = ["Pizza", 2, true];
```

---

## 🔹 Any e Union Types

O tipo `any` permite qualquer tipo de valor:
```typescript
let variavel: any = "Texto";
variavel = 10;
variavel = true;
```

O `Union Type` permite múltiplos tipos para uma variável:
```typescript
let valor: string | number;
valor = "Sérgio";
valor = 123;
```

---

## 🔹 Tipos Especiais: Void e Never

### `void` - Indica que uma função não retorna valor:
```typescript
const logMensagem = (mensagem: string): void => {
  console.log(mensagem);
};
```

### `never` - Indica que a função nunca chega a um fim normal:
```typescript
const erro = (): never => {
  throw new Error("Erro crítico!");
};
```

---

## 🔹 Type Aliases

O `type` permite criar nomes personalizados para tipos:
```typescript
type ID = string | number;

let usuarioID: ID;
usuarioID = 123;
usuarioID = "abc123";
```

---

## 🔹 String Literal Types

Define valores específicos para uma variável:
```typescript
let eventoMouse: "click" | "dblclick" | "mouseup";
eventoMouse = "click";
```

---

## 🔹 Parâmetros Opcionais

Um parâmetro opcional pode ou não ser passado para a função:
```typescript
const saudar = (nome: string, idade?: number): string => {
  return idade ? `Nome: ${nome}, Idade: ${idade}` : `Nome: ${nome}, Idade não informada`;
};

console.log(saudar("Sérgio"));
console.log(saudar("Sérgio", 31));
```

---

## 🔹 Enum

O `enum` permite criar conjuntos de valores nomeados:
```typescript
enum Mes {
  JAN = "Janeiro",
  FEV = "Fevereiro",
  MAR = "Março",
}

const aniversario: { nome: string; mes: Mes } = {
  nome: "Sérgio",
  mes: Mes.MAR,
};

console.log(aniversario);
```

---

Este documento será atualizado conforme o avanço nos estudos de TypeScript. 🚀
