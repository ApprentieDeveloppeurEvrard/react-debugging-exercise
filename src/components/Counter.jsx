import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // ❌ Mauvaise mise à jour du state (ne tient pas compte de la valeur précédente)
  const increment = () => {
    // setCount(count + 1);
    //Bonne manière
  setCount(prevCount => prevCount + 1);
  };

  


  return (
    <div>
      <h2>Compteur: {count}</h2>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default Counter;
