import ReactDOM from "react-dom/client";
import Aleatorio from "./Aleatorio";
import Estado from "./Estado";
import Familia from "./Familia";
import FamiliaMembro from "./FamiliaMembro";
import ListaAlunos from "./ListaAlunos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Aleatorio minimo={1} maximo={100}></Aleatorio>
    <Estado nome="Maria" nota={15}></Estado>
    <Familia apelido="Silva">
      <FamiliaMembro nome="Maria"></FamiliaMembro>
      <FamiliaMembro nome="Manuel"></FamiliaMembro>
      <FamiliaMembro nome="Ricardo"></FamiliaMembro>
      <FamiliaMembro nome="Ana" apelido="Ferreira"></FamiliaMembro>
    </Familia>
   <ListaAlunos /> 
  </div>
);
