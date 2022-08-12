const listaDePecas = ['Lanterna', 'Roda', 'Capô', 'PO']

console.log("Início do processamento.")
console.log("-------")

let pesoPeca = 99
if (pesoPeca > 100) {console.log("Peso dentro do limite aceito; pode cadastrar.")}
else {console.log("Peça recusada por exceder o limite de peso.")}
console.log("-------")

let qtdePeca = 11
if (qtdePeca > 10) {console.log("Limite de peças ultrapassado por caixa.")}
else {console.log("Peça dentro do limite da caixa.")}
console.log("-------")

for (let index = 0; index < listaDePecas.length; index++) {
    const nomePeca = listaDePecas[index];
        if (nomePeca.length < 3) {console.log("Nome da peça inválido.")}
        else {console.log("Nome aceito.")}
}
console.log("-------")
console.log("Fim do processamento.")
