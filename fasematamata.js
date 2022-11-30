mostrarMataMata()

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
    createGameMata("holanda", "12:00", "estadosunidos", "1") +
      createGameMata("aguardando", "16:00", "aguardando", "2")
  ) +
  createCardMata(
    "oitavas",
    "04/12",
    "domingo",
    createGameMata("aguardando", "12:00", "aguardando", "3") +
      createGameMata("inglaterra", "16:00", "senegal", "4")
  ) +
  createCardMata(
    "oitavas",
    "05/12",
    "segunda",
    createGameMata("aguardando", "12:00", "aguardando", "5") +
      createGameMata("aguardando", "16:00", "aguardando", "6")
  ) +
  createCardMata(
    "oitavas",
    "06/12",
    "terça",
    createGameMata("aguardando", "12:00", "aguardando", "7") +
      createGameMata("aguardando", "16:00", "aguardando", "8")
  ) +
  createCardMata(
    "quartas",
    "09/12",
    "sexta",
    createGameMata("aguardando", "12:00", "aguardando", "9") +
      createGameMata("aguardando", "16:00", "aguardando", "10")
  ) +
  createCardMata(
    "quartas",
    "10/12",
    "sábado",
    createGameMata("aguardando", "12:00", "aguardando", "11") +
      createGameMata("aguardando", "16:00", "aguardando", "12")
  ) +
  createCardMata(
    "semifinal 1",
    "13/12",
    "terça",
    createGameMata("aguardando", "16:00", "aguardando", "13")
  ) +
  createCardMata(
    "semifinal 2",
    "14/12",
    "quarta",
    createGameMata("aguardando", "16:00", "aguardando", "14")
  ) +
  createCardMata(
    "final",
    "18/12",
    "domingo",
    createGameMata("aguardando", "12:00", "aguardando", "15")
  )

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