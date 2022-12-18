mostrarMataMata()
mostrarFinal()

// Criar o jogo da fase de mata
function createGameMata(player1, hour, player2, jogo) {
  return `
    <li id="${jogo}" class="${jogo}">
      <div class="tooltip1" data-tooltip="${player1}"><img
        src="./assets/icon-${player1}.svg"
        alt="Time ${player1}"
      /></div>
      <div><strong>${hour}</strong>jogo ${jogo}</div>
      <div class="tooltip2" data-tooltip="${player2}"><img src="./assets/icon-${player2}.svg" alt="Time ${player2}" /></div>
    </li>
    
  `
}

// Criar o cartão do dia da fase de mata
let delay = -0.2
function createCardMata(rodada, date, day, games) {
  delay = delay + 0.2
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <p>${rodada}</p>

      <ul>
        ${games}          
      </ul>
    </div>
  `
}

// Colocar cards dos jogos da fase de mata no HTML
document.querySelector("#cardsmata").innerHTML =
  createCardMata(
    "final",
    "18/12",
    "domingo",
    createGameMata("argentina", "3 x 3 ", "frança", "16")
  ) +
  createCardMata(
    "terceiro e quarto",
    "17/12",
    "sábado",
    createGameMata("croacia", "2 x 1", "marrocos", "15")
  )

// Modificações nos estilos para mostrar/esconder fase de grupo ou fase mata-mata
function mostrarMataMata() {
  var botaomata = document.querySelector(".botaomatamata")
  var botaogrupos = document.querySelector(".botaogrupo")

  if (botaomata.style.backgroundColor === "rgba(0, 0, 0, 0.6)") {
    botaomata.style.backgroundColor = "white"
  } else {
    botaomata.style.backgroundColor = "white"
  }

  if (botaogrupos.style.backgroundColor === "white") {
    botaogrupos.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
  } else {
    botaogrupos.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
  }
}

function mostrarGrupos() {
  var botaogrupos = document.querySelector(".botaogrupo")
  var botaomata = document.querySelector(".botaomatamata")

  if (botaogrupos.style.backgroundColor === "rgba(0, 0, 0, 0.6)") {
    botaogrupos.style.backgroundColor = "white"
  } else {
    botaogrupos.style.backgroundColor = "white"
  }

  if (botaomata.style.backgroundColor === "white") {
    botaomata.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
  } else {
    botaomata.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
  }
}

function mostrarFinal() {
  var botaofinal = document.querySelector(".final")

  if (botaofinal.style.backgroundColor === "rgba(0, 0, 0, 0.6)") {
    botaofinal.style.backgroundColor = "white"
  } else {
    botaofinal.style.backgroundColor = "white"
  }
}
