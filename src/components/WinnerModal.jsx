import { Square } from "./Square"

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó:'
  return (
    <section className="absolute text-white w-screen h-screen top-0 left-0 grid place-items-center bg-black/70">
      <div className="bg-black h-72 w-80 border-2 border-gray-200 rounded-xl flex flex-col justify-center items-center gap-5">
        <h2>{winnerText}</h2>
        <header className="my-0 mx-auto w-fit border-2 rounded-xl flex gap-4">
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button className="text-white border border-white py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-colors" onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
} 