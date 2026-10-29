import { useState, useEffect } from "react";
import Image from "./assets/images/cookie.png"
import "./assets/CSS/App.css"
import Upgrade from "./src/upgrades/Upgrades";

function App() {
  console.log("O componente foi renderizado!")
  const [seeButtonAuto, setSeeButtonAuto] = useState<Boolean>(false);
  const [seeButtonPrice, setSeeButtonPrice] = useState<Boolean>(false);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
  const [clickEffect, setClickEffect] = useState(0);

  // Preço do up de cada clique
  const [priceUp, setPriceUp] = useState(50);

  // Preço do up de cada auto clique
  const [auto, setAuto] = useState(300);
  const [autoCount, setAutoCount] = useState(0)

  useEffect(() => {
    if (autoCount <= 0) return;

    const interval = setInterval(() => {
      setCount(count => count + autoCount);
    }, 1000);

    return () => clearInterval(interval);
  }, [autoCount]);

  useEffect(() => {
    if (count < priceUp) {
      setSeeButtonPrice(false)
    } else {
      setSeeButtonPrice(true)
    }

    if (count < auto) {
      setSeeButtonAuto(false)
    } else {
      setSeeButtonAuto(true)
    }
  })


  return (
    <div className="div1">
      <div className="div2">
        <div className="text">
          <h1>Cookies: {Math.floor(count)}</h1>
        </div>
        <div className="textCookie">
          <div className="cookie"
            onClick={() => {
              setCount(count + number)
              setClickEffect(clickEffect => clickEffect + 1);

            }}>
            <img src={Image} className="cookieImage" />

            <p key={clickEffect} className="click-gain">
              +{number}
            </p>
          </div>
          <h1 className="up-text">Click Incress</h1>

          <Upgrade />

          <div className={`up-button ${seeButtonPrice ? "true" : ""}`}
            onClick={() => {
              setCount(count - priceUp)
              setPriceUp(priceUp * 1.30)
              setNumber(number + 1)
            }}
          >{Math.floor(priceUp)} cliques
          </div>

          <h1 className="auto-text">Auto Click</h1>
          <div className={`auto-button ${seeButtonAuto ? "true" : ""}`}
            onClick={() => {
              setCount(count - auto)
              setAutoCount(autoCount => autoCount + 1)
              setAuto(auto * 1.30)
            }}
          >{Math.floor(auto)} cliques
          </div>


        </div>
      </div>
    </div>
  );
}

export default App

