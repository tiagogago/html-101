export default function Estado(props) {
  const estado = props.nota < 10 ? "Não aprovado" : "Aprovado";

  return (
    <div>
      <h3>
        Nome: {props.nome} - {props.nota} - {estado}
      </h3>
    </div>
  );
}
