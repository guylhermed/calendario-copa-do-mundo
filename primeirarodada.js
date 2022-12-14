mostrarGrupos()
mostrarPrimeiraRodada()

// Criar o jogo da fase de grupos
function createGame(player1, hour, player2, group) {
  return `
    <li id="${group}" class="${group}">
      <div class="tooltip1" data-tooltip="${player1}"><img
        src="./assets/icon-${player1}.svg"
        alt="Bandeira ${player1}"
      /></div>
      <div><strong>${hour}</strong>grupo ${group}</div>
      <div class="tooltip2" data-tooltip="${player2}"><img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" /></div>
    </li>
    
  `
}

// Criar o cartão do dia da fase de grupos
let delay = -0.2
function createCard(rodada, date, day, games) {
  delay = delay + 0.2
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <p>${rodada}ª Rodada</p>

      <ul>
        ${games}          
      </ul>
    </div>
  `
}

// Colocar cards dos jogos da fase de grupos no HTML
document.querySelector("#cards").innerHTML =
  createCard(
    "1",
    "20/11",
    "domingo",
    createGame("catar", "0 x 2", "equador", "a")
  ) +
  createCard(
    "1",
    "21/11",
    "segunda",
    createGame("inglaterra", "6 x 2", "ira", "b") +
      createGame("senegal", "0 x 2", "holanda", "a") +
      createGame("estadosunidos", "1 x 1", "paisdegales", "b")
  ) +
  createCard(
    "1",
    "22/11",
    "terça",
    createGame("argentina", "1 x 2", "arabiasaudita", "c") +
      createGame("dinamarca", "0 x 0", "tunisia", "d") +
      createGame("mexico", "0 x 0", "polonia", "c") +
      createGame("frança", "4 x 1", "australia", "d")
  ) +
  createCard(
    "1",
    "23/11",
    "quarta",
    createGame("marrocos", "0 x 0", "croacia", "f") +
      createGame("alemanha", "1 x 2", "japao", "e") +
      createGame("espanha", "7 x 0", "costarica", "e") +
      createGame("belgica", "1 x 0", "canada", "f")
  ) +
  createCard(
    "1",
    "24/11",
    "quinta",
    createGame("suiça", "1 x 0", "camaroes", "g") +
      createGame("uruguai", "0 x 0", "coreiadosul", "h") +
      createGame("portugal", "3 x 2", "gana", "h") +
      createGame("brasil", "2 x 0", "servia", "g")
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

function mostrarPrimeiraRodada() {
  var botaoprimeira = document.querySelector(".primeirarodada")

  if (botaoprimeira.style.backgroundColor === "rgba(0, 0, 0, 0.6)") {
    botaoprimeira.style.backgroundColor = "white"
  } else {
    botaoprimeira.style.backgroundColor = "white"
  }
}
