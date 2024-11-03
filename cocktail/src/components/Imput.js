import useCharLimit from "../hooks/useCharLimit";

const Input = () => {
  const [inputValue, setInputValue] = useCharLimit("", 10);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
