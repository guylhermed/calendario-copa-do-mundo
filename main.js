alterarBackgroundBotaoRodada("todasrodadas")

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
  ) +
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
  ) +
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

const cards = document.querySelectorAll(".card")

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

function alterarBackgroundBotaoRodada(rodada) {
  document.querySelectorAll(".menuhorizontal > ul > li").forEach((value) => {
    let className = value.classList[0]
    if (className === rodada) {
      document.querySelector(`.${className}`).style.backgroundColor = "white"
    } else {
      document.querySelector(`.${className}`).style.backgroundColor =
        "rgba(0, 0, 0, 0.6)"
    }
  })
}

function filtro(filtro) {
  let cardsString = ""
  let cardAnimationDelay = 0
  cards.forEach((value) => {
    if (filtro === 0) {
      cardsString = cardsString + value.outerHTML
    } else if (value.textContent.includes(`${filtro}ª Rodada`)) {
      cardsString =
        cardsString +
        `<div class="card" style="animation-delay: ${cardAnimationDelay}s">${value.innerHTML}</div>`
      cardAnimationDelay += 0.2
    }
  })

  document.querySelector("#cards").innerHTML = cardsString
}
