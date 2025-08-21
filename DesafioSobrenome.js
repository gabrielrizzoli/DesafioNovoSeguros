//importei a biblioteca readline-sync para ler entradas do usuário digitar quando solicitado
import readline from "readline-sync";

//criei uma função que recebe um nome completo e retorna formatado no estilo pedido pelo desafio
function formatarNomeCompleto(nomeCompleto) {

    //seperei o nome em partes e removi os espaços
    let partes = nomeCompleto.trim().split(" ");

    //Peguei o último sobrenome e coloca em maiúsculo
    let ultimoSobrenome = partes[partes.length - 1].toUpperCase();

    //criei uma Variável para armazenar as iniciais dos primeiros nomes
    let iniciais = "";

    //Percorri todas as partes do nome, menos o último sobrenome
    for (let i = 0; i < partes.length - 1; i++) {

        //Peguei a primeira letra de cada parte, coloquei em maiúsculo e somei um ponto
        iniciais += partes[i][0].toUpperCase() + ". ";
    }

    //Removi espaço extra no final e retornei o nome formatado
    iniciais = iniciais.trim();
    return ultimoSobrenome + ", " + iniciais;
}

//criei um array para guardar os nomes digitados pelo usuário, solicitei tres entradas do mesmo e inseri esses nomes no array
const nomes = [];
for (let i = 1; i <= 3; i++) {
    let nome = readline.question(`Digite o nome completo ${i}: `);
    nomes.push(nome);
}

//mostrei os resultados e chamei a função formatarNomeCompleto para cada nome digitado
console.log("\nr--- resultados finais:");
for (let i = 0; i < nomes.length; i++) {
    let resultado = formatarNomeCompleto(nomes[i]);
    console.log(`Saída ${i + 1}: ${resultado}`);
}