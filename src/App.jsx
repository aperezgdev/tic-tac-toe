import './App.css'
import { Cuadricula } from './components/Cuadricula'
import { GameContextProvider } from './context/GameContext'
import { ModalWinner } from './components/ModalWinner'

function App() {
  return (
    <>
      <header>
        <h1>Cruz y Raya</h1>
      </header>
      <main>
        <GameContextProvider>
          <ModalWinner/>
          <Cuadricula/>
        </GameContextProvider>
      </main>  
    </>
  )
}

export default App
