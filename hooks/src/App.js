import React, { useState } from "react";
import DataContext, { data } from "./data/DataContext";
import Basic from "./Componentes/Basic";
import Another from "./Componentes/Another";
import Counter from "./Componentes/Counter";

function App() {
  const [state, setState] = useState(data);
  return (
    <DataContext.Provider value={{ state, setState }}>
      <div className="container">
        <div className="text-center">
          <Counter />
          <Basic />
          <Another />
        </div>
      </div>
    </DataContext.Provider>
  );
}
export default App;
