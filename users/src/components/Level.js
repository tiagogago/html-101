import React, { useContext, useEffect, useState } from "react";
import DataContext from "../data/DataContext";

const Level = (props) => {
  const { state } = useContext(DataContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (state.userLevel >= props.level) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [state.userLevel]);
  if (show) {
    console.log("executou o render");
    return <div>Component Level {props.level}</div>;
  }
};

export default Level;
