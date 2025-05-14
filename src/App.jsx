import React, { useState } from 'react';

function App() {
  const [numr, setNumber] = useState(100);
  const [aparecer, Aumentar] = useState(false);

  const incrementNumber = () => {
    setNumber(numr + 100);
  };

  const visivel = () => {
    Aumentar(!aparecer);
  };

  return (
    <div>
      <h1>{numr}</h1>
      <button onClick={incrementNumber}>Aumentar por 100</button>

      <p>{aparecer ? 'oii' : null}</p>
      <button onClick={visivel}>
        {aparecer ? 'Esconder' : 'Mostrar'}
      </button>
    </div>
  );
}

export default App;
