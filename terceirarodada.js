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
      createGame("ira", "16:00", "estadosunidos", "b") +
      createGame("paisdegales", "16:00", "inglaterra", "b")
  ) +
  createCard(
    "3",
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "frança", "d") +
      createGame("australia", "12:00", "dinamarca", "d") +
      createGame("polonia", "16:00", "argentina", "c") +
      createGame("arabiasaudita", "16:00", "mexico", "c")
  ) +
  createCard(
    "3",
    "01/12",
    "quinta",
    createGame("croacia", "12:00", "belgica", "f") +
      createGame("canada", "12:00", "marrocos", "f") +
      createGame("japao", "16:00", "espanha", "e") +
      createGame("costarica", "16:00", "alemanha", "e")
  ) +
  createCard(
    "3",
    "02/12",
    "sexta",
    createGame("coreiadosul", "12:00", "portugal", "h") +
      createGame("gana", "12:00", "uruguai", "h") +
      createGame("camaroes", "16:00", "brasil", "g") +
      createGame("servia", "16:00", "suiça", "g")
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
