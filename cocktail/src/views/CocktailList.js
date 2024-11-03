import Cocktail from "../components/Cocktail";
import Letters from "../components/Letters";
import Input from "../components/Imput";
import { useState } from "react";

const CocktailList = () => {
  const [letter, setLetter] = useState("a");

  const aoClicar = (e) => {
    setLetter(e.target.innerText);
  };
  return (
    <>
      <Input />
      <Letters aoClicar={aoClicar} />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Drink</th>
            <th scope="col">Category</th>
            <th scope="col">Instructions</th>
            <th scope="col">Photo</th>
          </tr>
        </thead>
        <tbody>
          <Cocktail letter={letter} />
        </tbody>
      </table>
    </>
  );
};
export default CocktailList;
