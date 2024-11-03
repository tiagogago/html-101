import { useState } from "react";

const useCharLimit = (value, limit) => {
  const [charValue, setCharValue] = useState(value);
  const validateCharacterLimit = (value) => {
    if (value.length <= limit) {
      setCharValue(value);
    }
  };
  return [charValue, validateCharacterLimit];
};
export default useCharLimit;
