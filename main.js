function createGame(player1, hour, player2, group) {
  return `
    <li>
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
  )
