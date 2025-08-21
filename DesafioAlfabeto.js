//importei a biblioteca readline-sync para ler entradas do usuário digitar quando solicitado
import readline from "readline-sync";

//criei um array com as letras do alfabeto
const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");

//crei função que recebe uma frase e retorna a maior letra do alfabeto
function maiorLetra(str) {

    //criei uma função para remover todos os caracteres que não são letras e transformar em minúsculas
    const limpa = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

    //Transformei a string em um array de letras separadas uma por uma
    const letras = limpa.split("");

    //Se não tiver nenhuma letra, retorna uma mensagem de erro
    if (letras.length === 0) {
        return "Não existem letras válidas na string.";
    }

    //consta que a primeira letra é a maior
    let maior = letras[0];

    //Percorre as outras letras da frase atraves de um loop, compara a posição da letra atual e da maior no alfabeto e retorna a maior letra encontrada
    for (let i = 1; i < letras.length; i++) {
        if (alfabeto.indexOf(letras[i]) > alfabeto.indexOf(maior)) {
            maior = letras[i];
        }
    }

    return maior;
}

//Solicitei ao usuário que digite 3 frases para analisar, e armazeno todas elas em um array
const frases = [];
for (let i = 1; i <= 3; i++) {
    const frase = readline.question(`digite a frase ${i} para analisar: `);
    frases.push(frase);
}

//Mostra os resultados finais e chama a função maiorLetra
console.log("\nResultados maiores letras:");
frases.forEach((frase, idx) => {
    const resultado = maiorLetra(frase);
    console.log(`Frase ${idx + 1}: maior letra encontrada: ${resultado}`);
});