export const gameActions = {
  CHECK_CASILLA : 'CHECK_CASILLA',
  RESET_GAME : 'RESET_GAME'
}

const COMBINACIONES_GANADORAS = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7],
]

export const gameReducer = (state, action) => {
  if(action.type === gameActions.CHECK_CASILLA) {
    const cuadricula = calcularCuadricula(state.cuadricula, action.position, state.playing)
    const { existeGanador, ganador } = comprobarGanador(cuadricula)

    if(existeGanador){
      const cuadriculaBloqueda = bloquearTodasCasillas(cuadricula)
      return {
        cuadricula: cuadriculaBloqueda,
        playing: state.playing === 1 ? 2 : 1  ,
        winner: ganador  
      }
    }

    return {
      ...state,
      cuadricula,
      playing: state.playing === 1 ? 2 : 1    
    }
  }

  if(action.type === gameActions.RESET_GAME) {
    const {estadoInicial} = action
    console.log(action)
    return {
      ...estadoInicial
    }
  }

}

const comprobarGanador = (cuadricula) => {
  const casillasChecked = cuadricula.filter(({checked}) => checked)

  if(casillasChecked.length < 5) return {existeGanador: false, ganador: 0}

  const casillasCheckedPlayerOne = cuadricula.filter(({checkedBy}) => checkedBy === 1).sort((a,b) => a.position - b.position)
  const casillasCheckedPlayerTwo = cuadricula.filter(({checkedBy}) => checkedBy === 2).sort((a,b) => a.position - b.position)

  const playerOneWin = comprobarGanadorChecked(casillasCheckedPlayerOne)

  if(playerOneWin) return {existeGanador: true, ganador: 1}

  const playerTwoWin = comprobarGanadorChecked(casillasCheckedPlayerTwo)

  if(playerTwoWin) return {existeGanador: true, ganador: 2}

  return {existeGanador: false, ganador: 0}
}

const comprobarGanadorChecked = (casillasChecked) => {
  const casillasSeleccionadas = casillasChecked.map(({position}) => position)  
  for (const combinacionGanadora of COMBINACIONES_GANADORAS) {
    for (let i = 0; i < combinacionGanadora.length; i++) {
      const position = combinacionGanadora[i];
      if(!casillasSeleccionadas.includes(position)){
        break
      }
      if(i === 2){
        return true
      }
    }
  }
  return false
}

const bloquearTodasCasillas = (cuadricula) => {
  const cuadriculaClone = structuredClone(cuadricula)
  cuadriculaClone.forEach(cuadricula => {
    cuadricula.checked = true
  })
  return cuadriculaClone
}

const calcularCuadricula = (cuadricula, position, playing) =>  {
  const cuadriculaClone = structuredClone(cuadricula)
  cuadriculaClone.forEach(cuadricula => {
    if(cuadricula.position === position){
      cuadricula.checked = true
      cuadricula.checkedBy = playing
    }
  })
  return cuadriculaClone
}