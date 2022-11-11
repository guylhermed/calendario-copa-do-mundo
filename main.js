function createGame(player1, hour, player2, group) {
  return `
    <li id="${group}">
      <div class="tooltip1" data-tooltip="${player1}"><img
        src="./assets/icon-${player1}.svg"
        alt="Bandeira ${player1}"
      /></div>
      <div><strong>${hour}</strong>grupo ${group}</div>
      <div class="tooltip2" data-tooltip="${player2}"><img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" /></div>
    </li>
    
  `
}

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

document.querySelector("#cards").innerHTML =
  createCard(
    "1",
    "20/11",
    "domingo",
    createGame("catar", "13:00", "equador", "a")
  ) +
  createCard(
    "1",
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", "ira", "b") +
      createGame("senegal", "13:00", "holanda", "a") +
      createGame("estadosunidos", "16:00", "paisdegales", "b")
  ) +
  createCard(
    "1",
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arabiasaudita", "c") +
      createGame("dinamarca", "10:00", "tunisia", "d") +
      createGame("mexico", "13:00", "polonia", "c") +
      createGame("frança", "16:00", "australia", "d")
  ) +
  createCard(
    "1",
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croacia", "f") +
      createGame("alemanha", "10:00", "japao", "e") +
      createGame("espanha", "13:00", "costarica", "e") +
      createGame("belgica", "16:00", "canada", "f")
  ) +
  createCard(
    "1",
    "24/11",
    "quinta",
    createGame("suiça", "07:00", "camaroes", "g") +
      createGame("uruguai", "10:00", "coreiadosul", "h") +
      createGame("portugal", "13:00", "gana", "h") +
      createGame("brasil", "16:00", "servia", "g")
  ) +
  createCard(
    "2",
    "25/11",
    "sexta",
    createGame("paisdegales", "07:00", "ira", "b") +
      createGame("catar", "10:00", "senegal", "a") +
      createGame("holanda", "13:00", "equador", "a") +
      createGame("inglaterra", "16:00", "estadosunidos", "b")
  ) +
  createCard(
    "2",
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia", "d") +
      createGame("polonia", "10:00", "arabiasaudita", "c") +
      createGame("frança", "13:00", "dinamarca", "d") +
      createGame("argentina", "16:00", "mexico", "c")
  ) +
  createCard(
    "2",
    "27/11",
    "domingo",
    createGame("japao", "07:00", "costarica", "e") +
      createGame("belgica", "10:00", "marrocos", "f") +
      createGame("croacia", "13:00", "canada", "f") +
      createGame("espanha", "16:00", "alemanha", "e")
  ) +
  createCard(
    "2",
    "28/11",
    "segunda",
    createGame("camaroes", "07:00", "servia", "g") +
      createGame("coreiadosul", "10:00", "gana", "h") +
      createGame("brasil", "13:00", "suiça", "g") +
      createGame("portugal", "16:00", "uruguai", "h")
  ) +
  createCard(
    "3",
    "29/11",
    "terça",
    createGame("holanda", "12:00", "catar", "a") +
      createGame("equador", "12:00", "senegal", "a") +
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

// function showhide(el) {
//   var display = document.getElementById(el).style.display
//   if (display == "none") {
//     document.getElementById(el).style.display = "inline-flex"
//   } else {
//     document.getElementById(el).style.display = "none"
//   }
// }

function mostrarMataMata() {
  var grupos = document.getElementById("cards")
  var mata = document.getElementById("matamata")

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
}

function mostrarGrupos() {
  var mata = document.getElementById("matamata")
  var grupos = document.getElementById("cards")

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
}
