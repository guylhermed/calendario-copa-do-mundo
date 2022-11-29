// Mostrar/Esconder os grupos selecionados por botão
// function showhide(el) {
//   var display = document.querySelector("." + el).style.display
//   if (display == "none") {
//     document.querySelector("." + el).style.display = "inline-flex"
//   } else {
//     document.querySelector("." + el).style.display = "none"
//   }
// }

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

// // Criar o jogo da fase de mata
// function createGameMata(player1, hour, player2, jogo) {
//   return `
//     <li id="${jogo}" class="${jogo}">
//       <div class="tooltip1" data-tooltip="${player1}"><img
//         src="./assets/${player1}.png"
//         alt="Time ${player1}"
//       /></div>
//       <div><strong>${hour}</strong>jogo ${jogo}</div>
//       <div class="tooltip2" data-tooltip="${player2}"><img src="./assets/${player2}.png" alt="Time ${player2}" /></div>
//     </li>

//   `
// }

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

// // Criar o cartão do dia da fase de mata
// function createCardMata(rodada, date, day, games) {
//   delay = delay + 0.2
//   return `
//   <div class="card" style="animation-delay: ${delay}s">
//       <h2>${date} <span>${day}</span></h2>
//       <p>${rodada}</p>

//       <ul>
//         ${games}
//       </ul>
//     </div>
//   `
// }

// // Colocar cards dos jogos da fase de mata no HTML
// document.querySelector("#cardsmata").innerHTML =
//   createCardMata(
//     "oitavas",
//     "03/12",
//     "sábado",
//     createGameMata("1A", "12:00", "2B", "1") +
//       createGameMata("1C", "16:00", "2D", "2")
//   ) +
//   createCardMata(
//     "oitavas",
//     "04/12",
//     "domingo",
//     createGameMata("1B", "12:00", "2A", "3") +
//       createGameMata("1D", "16:00", "2C", "4")
//   ) +
//   createCardMata(
//     "oitavas",
//     "05/12",
//     "segunda",
//     createGameMata("1E", "12:00", "2F", "5") +
//       createGameMata("1G", "16:00", "2H", "6")
//   ) +
//   createCardMata(
//     "oitavas",
//     "06/12",
//     "terça",
//     createGameMata("1F", "12:00", "2E", "7") +
//       createGameMata("1H", "16:00", "2G", "8")
//   ) +
//   createCardMata(
//     "quartas",
//     "09/12",
//     "sexta",
//     createGameMata("V5", "12:00", "V6", "9") +
//       createGameMata("V1", "16:00", "V2", "10")
//   ) +
//   createCardMata(
//     "quartas",
//     "10/12",
//     "sábado",
//     createGameMata("V7", "12:00", "V8", "11") +
//       createGameMata("V3", "16:00", "V4", "12")
//   ) +
//   createCardMata(
//     "semifinal 1",
//     "13/12",
//     "terça",
//     createGameMata("V9", "16:00", "V10", "13")
//   ) +
//   createCardMata(
//     "semifinal 2",
//     "14/12",
//     "quarta",
//     createGameMata("V11", "16:00", "V12", "14")
//   ) +
//   createCardMata(
//     "final",
//     "18/12",
//     "domingo",
//     createGameMata("V13", "12:00", "V14", "15")
//   )

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

// // Modificações nos estilos para mostrar/esconder fase de grupo ou fase mata-mata
// function mostrarMataMata() {
//   var botaomata = document.querySelector(".botaomatamata")
//   var botaogrupos = document.querySelector(".botaogrupo")

//   if (botaomata.style.color === "var(--card-color-primary)") {
//     botaomata.style.color = "white"
//   } else {
//     botaomata.style.color = "white"
//   }

//   if (botaomata.style.border === "none") {
//     botaomata.style.border = "1px solid white"
//   } else {
//     botaomata.style.border = "1px solid white"
//   }

//   if (botaogrupos.style.color === "white") {
//     botaogrupos.style.color = "var(--card-color-primary)"
//   } else {
//   }
//   botaogrupos.style.color = "var(--card-color-primary)"

//   if (botaogrupos.style.border === "1px solid white") {
//     botaogrupos.style.border = "none"
//   } else {
//     botaogrupos.style.border = "none"
//   }
// }

// function mostrarGrupos() {
//   var botaogrupos = document.querySelector(".botaogrupo")
//   var botaomata = document.querySelector(".botaomatamata")

//   if (botaogrupos.style.color === "var(--card-color-primary)") {
//     botaogrupos.style.color = "white"
//   } else {
//     botaogrupos.style.color = "white"
//   }

//   if (botaogrupos.style.border === "none") {
//     botaogrupos.style.border = "1px solid white"
//   } else {
//     botaogrupos.style.border = "1px solid white"
//   }

//   if (botaomata.style.color === "white") {
//     botaomata.style.color = "var(--card-color-primary)"
//   } else {
//   }
//   botaomata.style.color = "var(--card-color-primary)"

//   if (botaomata.style.border === "1px solid white") {
//     botaomata.style.border = "none"
//   } else {
//     botaomata.style.border = "none"
//   }
// }
