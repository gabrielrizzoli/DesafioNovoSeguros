//importei a biblioteca readline-sync para ler entradas do usuário digitar quando solicitado
import readline from "readline-sync";

//criei uma função para ler o nome dos alunos respeitando as regras
//dentro dessa função coloquei como regra que o nome só pode ter letras e espaços, caso estiver fora dessas regras, o usuário será solicitado a digitar novamente
function lerNomeAluno(indice) {
    while (true) {
        let nome = readline.question(`Digite o nome do aluno ${indice}: `).trim();
        if (/^[A-Za-zÀ-ÿ\s]+$/.test(nome) && nome.length > 0) {
            return nome;
        }
        console.log("insira apenas letras e espaços no nome do aluno.");
    }
}

//criei uma função para ler uma nota dos alunos respeitando as regras
//pra essa função, coloquei como regra que a nota deve ser um número entre 0 e 10, caso estiver fora dessas regras, o usuário será solicitado a digitar novamente
function lerNotaAluno(nome, numeroNota) {
    while (true) {
        let notaStr = readline.question(`Digite a nota ${numeroNota} do aluno ${nome}: `).replace(",", ".");
        let nota = Number(notaStr);
        if (!isNaN(nota) && notaStr.trim() !== "" && nota >= 0 && nota <= 10) {
            return nota;
        }
        console.log("insira apenas números válidos entre 0 e 10 para a nota.");
    }
}

//criei uma função principal que calcula as médias dos alunos, utilizando as outras funções já criadas
function calcularMediaAlunos() {
    const alunos = [];

    //criei um Loop para coletar dados dos alunos e um loop para coletar as notas
    for (let i = 1; i <= 3; i++) {
        let nome = lerNomeAluno(i);
        let notas = [];
        for (let j = 1; j <= 4; j++) {
            notas.push(lerNotaAluno(nome, j));
        }
         //calculei a média e adiociona o nome e a média no array de alunos
        let media = notas.reduce((acc, n) => acc + n, 0) / notas.length;
        alunos.push({ nome, media });
    }

    //mostra os resultados finais
    console.log("\nResultados finais:");
    alunos.forEach((aluno, idx) => {
        console.log(`Saida ${idx + 1}: Aluno = ${aluno.nome} // Media = ${aluno.media.toFixed(2)}`);
    });
    
}

calcularMediaAlunos();