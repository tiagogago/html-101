import React from "react";

export default function Primeiro() {
  const mensagem = "Bem Vindo!";
  return (
    <React.Fragment>
      <h2>Primeiro Componente</h2>
      <p>{mensagem}</p>
    </React.Fragment>
  );
}
