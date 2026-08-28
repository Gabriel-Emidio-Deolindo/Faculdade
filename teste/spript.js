// ! SISTEMA BANCÁRIO VINCULADO AO HTML
// TODO: Adicionar histórico de transações futuramente

class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    this.saldo += valor;
    return `Depósito de R$ ${valor.toFixed(2)} aprovado.`;
  }

  sacar(valor) {
    // ? Regra para impedir saque se não houver saldo suficiente
    if (valor > this.saldo) {
      return `! Erro: Saldo insuficiente para sacar R$ ${valor.toFixed(2)}.`;
    }
    this.saldo -= valor;
    return `Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`;
  }
}

// Inicializando a conta com R$ 1000
const conta = new ContaBancaria("Gabriel", 1000);

// ? Funções que fazem a ponte entre os botões do HTML e a nossa classe
function atualizarTela(mensagemTexto, erro = false) {
  // Atualiza o valor do saldo lá no h2 do HTML
  document.getElementById("saldoAtual").innerText = conta.saldo.toFixed(2);

  // Atualiza a mensagem na tela
  const mensagem = document.getElementById("mensagem");
  mensagem.innerText = mensagemTexto;
  mensagem.style.color = erro ? "#ff4d4d" : "#4CAF50"; // Fica vermelho se for erro, verde se for sucesso
}

function realizarDeposito() {
  const input = document.getElementById("valorInput");
  const valor = parseFloat(input.value);

  if (isNaN(valor) || valor <= 0) {
    atualizarTela("Por favor, digite um valor válido para depósito.", true);
    return;
  }

  const msg = conta.depositar(valor);
  atualizarTela(msg);
  input.value = ""; // Limpa a caixinha de texto
}

function realizarSaque() {
  const input = document.getElementById("valorInput");
  const valor = parseFloat(input.value);

  if (isNaN(valor) || valor <= 0) {
    atualizarTela("Por favor, digite um valor válido para saque.", true);
    return;
  }

  const msg = conta.sacar(valor);
  atualizarTela(msg, msg.includes("Erro"));
  input.value = ""; // Limpa a caixinha de texto
}
