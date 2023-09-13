import { WINNER_COMBOS  } from "../components/constants"

export const checkWinnerFrom = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] && // 0 -> X / 0
      boardToCheck[a] === boardToCheck[b] && // 0 y 3 -> x -> x u o -> o
      boardToCheck[a] === boardToCheck[c]
    )
      return boardToCheck[a]
  }
  // Si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate si no hay mas espacios vacios en el tablero 
  return newBoard.every((square) => square !== null)
}