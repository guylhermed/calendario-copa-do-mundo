mostrarGrupos()
mostrarTerceiraRodada()

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
    "3",
    "29/11",
    "terça",
    createGame("holanda", "2 x 0", "catar", "a") +
      createGame("equador", "1 x 2", "senegal", "a") +
      createGame("ira", "0 x 1", "estadosunidos", "b") +
      createGame("paisdegales", "0 x 3", "inglaterra", "b")
  ) +
  createCard(
    "3",
    "30/11",
    "quarta",
    createGame("tunisia", "1 x 0", "frança", "d") +
      createGame("australia", "1 x 0", "dinamarca", "d") +
      createGame("polonia", "0 x 2", "argentina", "c") +
      createGame("arabiasaudita", "1 x 2", "mexico", "c")
  ) +
  createCard(
    "3",
    "01/12",
    "quinta",
    createGame("croacia", "0 x 0", "belgica", "f") +
      createGame("canada", "1 x 2", "marrocos", "f") +
      createGame("japao", "2 x 0", "espanha", "e") +
      createGame("costarica", "2 x 4", "alemanha", "e")
  ) +
  createCard(
    "3",
    "02/12",
    "sexta",
    createGame("coreiadosul", "2 x 1", "portugal", "h") +
      createGame("gana", "0 x 2", "uruguai", "h") +
      createGame("camaroes", "1 x 0", "brasil", "g") +
      createGame("servia", "2 x 3", "suiça", "g")
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

function mostrarTerceiraRodada() {
  var botaoterceira = document.querySelector(".terceirarodada")

  if (botaoterceira.style.backgroundColor === "rgba(0, 0, 0, 0.6)") {
    botaoterceira.style.backgroundColor = "white"
  } else {
    botaoterceira.style.backgroundColor = "white"
  }
}
