var area = document.getElementById('area');
var formAcesso = document.getElementById('formAcesso');
var formNotas = document.getElementById('formNotas');
var resultado = document.getElementById('resultado');
var botaoSair = document.getElementById('botaoSair');

// Faz o login usando os campos do formulário (nome e curso)
function entrar(event) {
    event.preventDefault();

    var nome = document.getElementById('inputNome').value.trim();
    var curso = document.getElementById('inputCurso').value.trim();

    if (nome === '' || curso === '') {
        alert("Ops, algo deu errado!");
        return;
    }

    area.innerHTML = '<span class="prompt">$</span> acesso liberado: ' + nome +
        ' <span class="tag">[' + curso + ']</span><span class="cursor">_</span>';

    // Esconde o formulário de acesso e mostra o de notas + botão sair
    formAcesso.classList.add('oculto');
    formNotas.classList.remove('oculto');
    botaoSair.classList.remove('oculto');
}

// Sai da conta e reseta a tela para o estado inicial
function sair() {
    area.innerHTML = '<span class="prompt">$</span> sessão encerrada<span class="cursor">_</span>';

    formNotas.classList.add('oculto');
    botaoSair.classList.add('oculto');
    formAcesso.classList.remove('oculto');
    formAcesso.reset();
    formNotas.reset();

    resultado.innerHTML = "";
    resultado.className = "resultado";

    // Pequeno delay pra dar tempo de ler a mensagem de saída antes de voltar ao prompt inicial
    setTimeout(function () {
        area.innerHTML = '<span class="prompt">$</span> aguardando login<span class="cursor">_</span>';
    }, 1400);
}

// Calcula a média de três notas e retorna o valor (usada também no console)
function mediaTresNotas(nota1, nota2, nota3) {
    var media = (nota1 + nota2 + nota3) / 3;

    if (media >= 6) {
        console.log("Média: " + media.toFixed(2) + " - Aluno Aprovado!");
    } else {
        console.log("Média: " + media.toFixed(2) + " - Aluno Reprovado!");
    }

    return media;
}

// Lê as notas do formulário, calcula a média e mostra o resultado estilizado
function calcularMedia(event) {
    event.preventDefault();

    var nota1 = parseFloat(document.getElementById('inputNota1').value);
    var nota2 = parseFloat(document.getElementById('inputNota2').value);
    var nota3 = parseFloat(document.getElementById('inputNota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Ops, digite apenas números válidos!");
        return;
    }

    var media = mediaTresNotas(nota1, nota2, nota3);

    // Reseta classes de animação para poder rodar de novo mesmo com o mesmo resultado
    resultado.className = "resultado";
    void resultado.offsetWidth; // força o navegador a "recomeçar" a animação

    if (media >= 6) {
        resultado.innerHTML =
            '<span class="linha-log">&gt; média calculada: ' + media.toFixed(2) + '</span>' +
            '<span class="linha-log">&gt; status: APROVADO 🎉🎊✅</span>';
        resultado.classList.add('aprovado');
    } else {
        resultado.innerHTML =
            '<span class="linha-log">&gt; média calculada: ' + media.toFixed(2) + '</span>' +
            '<span class="linha-log">&gt; status: REPROVADO 😢😞💔</span>';
        resultado.classList.add('reprovado');
    }
}