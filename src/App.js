import React from "react";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <h1>Débogage React</h1>
      <Counter />
      <UserCard name="Alice" />
      <UserCard /> {/* ❌ Ici, `name` et `age` sont manquants */}
      <UserCard name="Alice" age={25} />
    </div>
  );
}

export default App;
