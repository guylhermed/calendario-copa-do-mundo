mostrarMataMata()
mostrarOitavas()

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
    "oitavas",
    "03/12",
    "sábado",
    createGameMata("holanda", "3 x 1", "estadosunidos", "1") +
      createGameMata("argentina", "2 x 1", "australia", "2")
  ) +
  createCardMata(
    "oitavas",
    "04/12",
    "domingo",
    createGameMata("frança", "3 x 1", "polonia", "3") +
      createGameMata("inglaterra", "3 x 0", "senegal", "4")
  ) +
  createCardMata(
    "oitavas",
    "05/12",
    "segunda",
    createGameMata("japao", "1 x 1", "croacia", "5") +
      createGameMata("brasil", "4 x 1", "coreiadosul", "6")
  ) +
  createCardMata(
    "oitavas",
    "06/12",
    "terça",
    createGameMata("marrocos", "0 x 0", "espanha", "7") +
      createGameMata("portugal", "6 x 1", "suiça", "8")
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

function mostrarOitavas() {
  var botaooitavas = document.querySelector(".oitavas")

  if (botaooitavas.style.backgroundColor === "rgba(0, 0, 0, 0.6)") {
    botaooitavas.style.backgroundColor = "white"
  } else {
    botaooitavas.style.backgroundColor = "white"
  }
}
