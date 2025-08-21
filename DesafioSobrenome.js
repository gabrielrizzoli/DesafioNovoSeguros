import readline from "readline-sync";

function formatarNomeCompleto(nomeCompleto) {
    let partes = nomeCompleto.trim().split(" ");
    let ultimoSobrenome = partes[partes.length - 1].toUpperCase();
    let iniciais = "";
    for (let i = 0; i < partes.length - 1; i++) {
        iniciais += partes[i][0].toUpperCase() + ". ";
    }
    iniciais = iniciais.trim();
    return ultimoSobrenome + ", " + iniciais;
}

const nomes = [];
for (let i = 1; i <= 3; i++) {
    let nome = readline.question(`Digite o nome completo ${i}: `);
    nomes.push(nome);
}

console.log("\nr--- resultados finais:");
for (let i = 0; i < nomes.length; i++) {
    let resultado = formatarNomeCompleto(nomes[i]);
    console.log(`Saída ${i + 1}: ${resultado}`);
}