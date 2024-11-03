import UsersList from "./components/UsersList";
import UserCard from "./components/UserCard";
import React, { useState } from "react";
import DataContext, { data } from "./data/DataContext";
import Acess from "./components/Acess";
import Level from "./components/Level";

function App() {
  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={{ state, setState }}>
      <div className="container">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <UsersList />
            </div>
            <div className="col">
              <UserCard />
            </div>
            <div className="col">
              <Acess>
                <Level level={1} />
                <Level level={3} />
                <Level level={5} />
              </Acess>
            </div>
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
