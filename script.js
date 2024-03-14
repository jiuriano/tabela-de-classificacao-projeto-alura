var jogadores = [
  {
    nome: "Paulo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Rafa",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Gui",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },
  {
    nome: "Renato",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  }
];

var elementoTabela = document.getElementById("tabelaJogadores");

// Inicializa a tabela com os jogadores
exibirNaTela();

// Função para exibir os jogadores na tela
function exibirNaTela() {
  elementoTabela.innerHTML = "";
  jogadores.forEach(function(jogador) {
    elementoTabela.innerHTML += `
      <tr>
          <td>${jogador.nome}</td>
          <td>${jogador.vitoria}</td>
          <td>${jogador.empate}</td>
          <td>${jogador.derrota}</td>
          <td>${jogador.pontos}</td>
          <td><button onClick="adicionarVitoria('${jogador.nome}')">Vitória</button></td>
          <td><button onClick="adicionarEmpate('${jogador.nome}')">Empate</button></td>
          <td><button onClick="adicionarDerrota('${jogador.nome}')">Derrota</button></td>
      </tr>
    `;
  });
}

// Função para adicionar vitória ao jogador
function adicionarVitoria(nome) {
  var jogador = jogadores.find(function(jogador) {
    return jogador.nome === nome;
  });
  jogador.vitoria++;
  jogador.pontos += 3;
  exibirNaTela();
}

// Função para adicionar empate ao jogador
function adicionarEmpate(nome) {
  var jogador = jogadores.find(function(jogador) {
    return jogador.nome === nome;
  });
  jogador.empate++;
  jogador.pontos += 1;
  exibirNaTela();
}

// Função para adicionar derrota ao jogador
function adicionarDerrota(nome) {
  var jogador = jogadores.find(function(jogador) {
    return jogador.nome === nome;
  });
  jogador.derrota++;
  exibirNaTela();
}
