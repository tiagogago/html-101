export default function aleatorio(props) {
  const aleatorio = Math.floor(
    Math.random() * (props.maximo - props.minimo + 1) + props.minimo
  );

  return (
    <div>
      <h2>Número: {aleatorio}</h2>
    </div>
  );
}
