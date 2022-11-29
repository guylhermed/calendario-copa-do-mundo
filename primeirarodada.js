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
  var grupos = document.getElementById("cards")
  var mata = document.getElementById("matamata")
  var botaomata = document.querySelector(".botaomatamata")
  var botaogrupos = document.querySelector(".botaogrupo")

  if (grupos.style.display === "flex") {
    grupos.style.display = "none"
  } else {
    grupos.style.display = "none"
  }

  if (mata.style.display === "none") {
    mata.style.display = "flex"
  } else {
    mata.style.display = "flex"
  }

  if (botaomata.style.color === "var(--card-color-primary)") {
    botaomata.style.color = "white"
  } else {
    botaomata.style.color = "white"
  }

  if (botaomata.style.border === "none") {
    botaomata.style.border = "1px solid white"
  } else {
    botaomata.style.border = "1px solid white"
  }

  if (botaogrupos.style.color === "white") {
    botaogrupos.style.color = "var(--card-color-primary)"
  } else {
  }
  botaogrupos.style.color = "var(--card-color-primary)"

  if (botaogrupos.style.border === "1px solid white") {
    botaogrupos.style.border = "none"
  } else {
    botaogrupos.style.border = "none"
  }
}

function mostrarGrupos() {
  var mata = document.getElementById("matamata")
  var grupos = document.getElementById("cards")
  var botaogrupos = document.querySelector(".botaogrupo")
  var botaomata = document.querySelector(".botaomatamata")

  if (mata.style.display === "flex") {
    mata.style.display = "none"
  } else {
    mata.style.display = "none"
  }

  if (grupos.style.display === "none") {
    grupos.style.display = "flex"
  } else {
    grupos.style.display = "flex"
  }

  if (botaogrupos.style.color === "var(--card-color-primary)") {
    botaogrupos.style.color = "white"
  } else {
    botaogrupos.style.color = "white"
  }

  if (botaogrupos.style.border === "none") {
    botaogrupos.style.border = "1px solid white"
  } else {
    botaogrupos.style.border = "1px solid white"
  }

  if (botaomata.style.color === "white") {
    botaomata.style.color = "var(--card-color-primary)"
  } else {
  }
  botaomata.style.color = "var(--card-color-primary)"

  if (botaomata.style.border === "1px solid white") {
    botaomata.style.border = "none"
  } else {
    botaomata.style.border = "none"
  }
}
