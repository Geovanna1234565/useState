import { useState } from "react"

export function App() {
  const [number, setNumber] = useState(100)
  const [mostrarEsconder, setMostrarEsconder] = useState(false)

  function handleAumentar() {
    setNumber(number + 100)
  }

  function handleMostrarEsconder() {
    if (mostrarEsconder === true) {
      setMostrarEsconder(false)
    } else {
      setMostrarEsconder(true)
    }

  }



  return (
    <main>
      <h1>Exercício useState</h1>

      <section>
        <h2>Número: {number}</h2>
        <button onClick={handleAumentar}>Aumentar 100</button>
      </section>

      <section>
        <h2>O parágrafo que some</h2>
        {mostrarEsconder ? <p>Em breve irei sumir</p> : ""}
        <button onClick={handleMostrarEsconder}>{mostrarEsconder ? "Esconder" : "Mostrar"}</button>
      </section>
    </main>
  )
}
