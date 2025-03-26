import React from "react";

const UserCard = ({ name, age }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>Nom: {name || "Inconnu"}</h3> {/* ✅ Ajout d'une valeur par défaut */}
      {/* <p>Âge: {age}</p> ❌ Si `age` est `undefined`, cela causera un bug */}
      <p>Âge: {age ?? "Non spécifié"}</p>
    </div>
  );
};

export default UserCard;
