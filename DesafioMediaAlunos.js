import readline from "readline-sync";

function lerNomeAluno(indice) {
    while (true) {
        let nome = readline.question(`Digite o nome do aluno ${indice}: `).trim();
        if (/^[A-Za-zÀ-ÿ\s]+$/.test(nome) && nome.length > 0) {
            return nome;
        }
        console.log("insira apenas letras e espaços no nome do aluno.");
    }
}

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

function calcularMediaAlunos() {
    const alunos = [];

    for (let i = 1; i <= 3; i++) {
        let nome = lerNomeAluno(i);
        let notas = [];
        for (let j = 1; j <= 4; j++) {
            notas.push(lerNotaAluno(nome, j));
        }
        let media = notas.reduce((acc, n) => acc + n, 0) / notas.length;
        alunos.push({ nome, media });
    }

    console.log("\nResultados finais:");
    alunos.forEach((aluno, idx) => {
        console.log(`Saida ${idx + 1}: Aluno = ${aluno.nome} // Media = ${aluno.media.toFixed(2)}`);
    });
    
}

calcularMediaAlunos();