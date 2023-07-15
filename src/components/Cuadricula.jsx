import { useContext } from "react"
import { Casilla } from "./Casilla"
import { GameContext } from "../context/GameContext"

export const Cuadricula = () => {
  const { gameState: { cuadricula } } = useContext(GameContext) 

  return (
    <div id='cuadricula'>
      {
        cuadricula.map(({position, checked, checkedBy}) => <Casilla key={position} checkedBy={checkedBy} position={position} checked={checked}/>)
      }
    </div>
  )
}