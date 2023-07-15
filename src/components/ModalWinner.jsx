import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export const ModalWinner = () => {
  const {gameState: {winner}, resetGame} = useContext(GameContext)

  if(winner === 0) return;

  return (
    <div id="modal">
      <p>El ganador es el jugador {winner}</p>
      <button onClick={resetGame}>Reiniciar juego</button>
    </div>
  )

}