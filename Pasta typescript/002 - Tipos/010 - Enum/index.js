var Mes;
(function (Mes) {
    Mes["JAN"] = "Janeiro";
    Mes["FEV"] = "Fevereiro";
    Mes["MAR"] = "Mar\u00E7o";
})(Mes || (Mes = {}));
var pessoa = {
    nome: "Sérgio",
    mesAniversario: Mes.MAR
};
if (pessoa.mesAniversario === Mes.MAR) {
    console.log(pessoa);
}