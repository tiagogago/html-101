export default function ComParente(props) {
  console.log(props);
  const status = props.nota >= 10 ? "Aprovado" : "Não Aprovado";
  const notaInteira = Math.ceil(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        Aluno - {props.name} - Classificação - {props.nota} - {status}
      </p>
    </div>
  );
}
