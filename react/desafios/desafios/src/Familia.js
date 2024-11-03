import React, {cloneElement} from "react";

const Familia = (props) => {
  return (
    <div>
      {
        React.Children.map(props.children, el => {
            return cloneElement(el, props);
        })
      }
    </div>
  );
};

export default Familia;
