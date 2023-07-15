import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export const Casilla = ({position, checked, checkedBy}) => {
  const { gameState ,checkCasilla } = useContext(GameContext) 

  const handlerClick = (evt) => {
    evt.preventDefault()
    if(!checked) checkCasilla(position)
  }

  return (
    <div className={`casilla playing${gameState.playing} player${checkedBy} ${checked ? `checkedBy${checkedBy}` : ''}`} onClick={handlerClick}>
      <span>
      {
        checked ? (checkedBy === 1 ? 'X' : (checkedBy === 2 ? 'O' : '')) : ''
      }
      </span>
    </div>
  )
}