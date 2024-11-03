import "./letters.css";

const Letters = (props) => {
  const letters = [];
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }

  const showLetters = letters.map((letter, index) => {
    return (
      <div key={index} className="letter" onClick={props.aoClicar}>
        {letter}
      </div>
    );
  });

  return <div className="letters">{showLetters}</div>;
};

export default Letters;
