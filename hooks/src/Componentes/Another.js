import { useContext } from "react";

import DataContext from "../data/DataContext";

const Another = () => {
  const { state } = useContext(DataContext);

  return (
    <>
      <div className="center">
        <h3>Another with Context</h3>
        <span className="text">{state.text}</span>
        <span className="text">{state.number}</span>
      </div>
    </>
  );
};

export default Another;
