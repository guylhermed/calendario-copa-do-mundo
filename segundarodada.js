mostrarGrupos()
mostrarSegundaRodada()

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
    "2",
    "25/11",
    "sexta",
    createGame("paisdegales", "0 x 2", "ira", "b") +
      createGame("catar", "1 x 3", "senegal", "a") +
      createGame("holanda", "1 x 1", "equador", "a") +
      createGame("inglaterra", "0 x 0", "estadosunidos", "b")
  ) +
  createCard(
    "2",
    "26/11",
    "sábado",
    createGame("tunisia", "0 x 1", "australia", "d") +
      createGame("polonia", "2 x 0", "arabiasaudita", "c") +
      createGame("frança", "2 x 1", "dinamarca", "d") +
      createGame("argentina", "2 x 0", "mexico", "c")
  ) +
  createCard(
    "2",
    "27/11",
    "domingo",
    createGame("japao", "0 x 1", "costarica", "e") +
      createGame("belgica", "0 x 2", "marrocos", "f") +
      createGame("croacia", "4 x 1", "canada", "f") +
      createGame("espanha", "1 x 1", "alemanha", "e")
  ) +
  createCard(
    "2",
    "28/11",
    "segunda",
    createGame("camaroes", "3 x 3", "servia", "g") +
      createGame("coreiadosul", "2 x 3", "gana", "h") +
      createGame("brasil", "1 x 0", "suiça", "g") +
      createGame("portugal", "2 x 0", "uruguai", "h")
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

function mostrarSegundaRodada() {
  var botaosegunda = document.querySelector(".segundarodada")

  if (botaosegunda.style.backgroundColor === "rgba(0, 0, 0, 0.6)") {
    botaosegunda.style.backgroundColor = "white"
  } else {
    botaosegunda.style.backgroundColor = "white"
  }
}
