import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square"
import { TURNS } from "./components/constants"
import { checkWinnerFrom, checkEndGame } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)
  // null es que no hay ganador, false es que hay un empate 
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  const updateBoard = (index) => {
    // no actualizamos esta posicion
    // si ya tiene algo
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      console.log(`El ganador es ${newWinner}`);
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <>
      <section className="w-screen h-screen bg-black py-12">
        <main className="w-fit mx-auto text-center ">
          <h1 className="text-3xl font-bold text-white mb-8">
            Tic Tac Toe
          </h1>
          <button className="text-white border border-white py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-colors mb-10" onClick={resetGame}>Reset Game</button>
          <section className="grid grid-cols-3 gap-5">
            {
              board.map((square, index) => {
                return (
                  <Square
                    key={index}
                    index={index}
                    updateBoard={updateBoard}
                  >
                    {square}
                  </Square>
                )
              })
            }
          </section>
          <section className="flex justify-center my-4 mx-auto w-fit relative rounded-xl gap-10">
            <Square isSelected={turn === TURNS.X}>
              {TURNS.X}
            </Square>
            <Square isSelected={turn === TURNS.O}>
              {TURNS.O}
            </Square>
          </section>
          <WinnerModal resetGame={resetGame} winner={winner} />
        </main>
      </section>
    </>
  )
}

export default App
