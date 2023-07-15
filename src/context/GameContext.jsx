import { createContext, useReducer } from "react";
import { gameReducer, gameActions } from "../reducer/GameReducer";

const DEFAULT_CUADRICULA = [
  {
    position: 1,
    checked: false,
    checkedBy: 0
  },
  {
    position: 2,
    checked: false,
    checkedBy: 0
  },
  {
    position: 3,
    checked: false,
    checkedBy: 0
  },
  {
    position: 4,
    checked: false,
    checkedBy: 0
  },
  {
    position: 5,
    checked: false,
    checkedBy: 0
  },
  {
    position: 6,
    checked: false,
    checkedBy: 0
  },
  {
    position: 7,
    checked: false,
    checkedBy: 0
  },
  {
    position: 8,
    checked: false,
    checkedBy: 0
  },
  {
    position: 9,
    checked: false,
    checkedBy: 0
  }
]

const INITIAL_STATE = {
  cuadricula: DEFAULT_CUADRICULA,
  playing: 1,
  winner: 0
}

export const GameContext = createContext()

export const GameContextProvider = ( { children } ) => {
  const [gameState, dispatch] = useReducer(gameReducer, INITIAL_STATE)

  const value = {
    gameState,
    checkCasilla: (position) => {
      dispatch({type: gameActions.CHECK_CASILLA, position, checkedBy: gameState.playing})
    },
    resetGame : () => {
      dispatch({type: gameActions.RESET_GAME, estadoInicial: INITIAL_STATE})
    }
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}



