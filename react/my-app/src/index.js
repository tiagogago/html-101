import ReactDOM from "react-dom/client";
import "./index.css";
import Primeiro from "./components-basic/Primeiro";
import ComParente from "./components-basic/ComParametro";
import Familia from "../../desafios/desafios/src/Familia";

const tag = <strong>Hello React</strong>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {tag}
    <Primeiro />
    <ComParente titulo="Classificações" name="Pedro" nota={15.7}></ComParente>
    <Familia apelido="Silva"></Familia>
  </div>
);
