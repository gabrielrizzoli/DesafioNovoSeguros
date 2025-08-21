import readline from "readline-sync";

const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
function maiorLetra(str) {

    const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");

    const limpa = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

    const letras = limpa.split("");

    if (letras.length === 0) {
        return "Não existem letras válidas na string.";
    }

    let maior = letras[0];
    for (let i = 1; i < letras.length; i++) {
        if (alfabeto.indexOf(letras[i]) > alfabeto.indexOf(maior)) {
            maior = letras[i];
        }
    }

    return maior;
}

const frases = [];
for (let i = 1; i <= 3; i++) {
    const frase = readline.question(`digite a frase ${i} para analisar: `);
    frases.push(frase);
}

console.log("\nResultados maiores letras:");
frases.forEach((frase, idx) => {
    const resultado = maiorLetra(frase);
    console.log(`Frase ${idx + 1}: maior letra encontrada: ${resultado}`);
});