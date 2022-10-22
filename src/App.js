import React from "react";
import { useState } from "react";
import text from "./data";

function App() {
  const [hodnota, setHodnota] = useState(1);
  const [generuj, setGeneruj] = useState([]);

  const pocetRiadkov = (cislo) => {
    let riadky = text.slice(0, cislo);
    setGeneruj(riadky);
  };

  return (
    <section className="container text-center">
      <h2 className="mt-5 mb-4">Unavený z nudného Lorem Ipsum?</h2>
      <article>
        <label htmlFor="hodnota">Paragraphy: </label>
        <input
          type="number"
          id="hodnota"
          name="hodnota"
          value={hodnota}
          onChange={(e) => setHodnota(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => pocetRiadkov(hodnota)}
        >
          Generuj!
        </button>
      </article>
      <div className="riadok">
        {generuj.map((riadok, index) => {
          return <p key={index}>{riadok}</p>;
        })}
      </div>
    </section>
  );
}

export default App;
