import { useState, useEffect } from "react";

function App() {
   console.log("O componente foi renderizado!")
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)

  const resultadoSoma = () => {
    console.log("Calculando");

    return number + 100
  }

  return (
    <div>
      <h1>Resultado: {resultadoSoma()}</h1>
      <h2>Contador: {count}</h2>
      <button 
      onClick={() => {
        if(count === resultadoSoma()) {
          return;
      } else
        setCount(count + 1)}}>Incrementar</button>
      <button 
      onClick={() => 
      {if(count === 0) {
        return;
      }
        setCount(count - 1)}}>Reduzir</button>
    </div>
  );
}

export default App