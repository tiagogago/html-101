import produtos from "../data/produtos";

const listaProdutos = () => {
  const listaLI = produtos.map((produto) => {
    return (
      <li key={produto.referencia}>
        {produto.referencia} - {produto.descricao} - {produto.preco} -{" "}
        {produto.categoria}
      </li>
    );
  });

  return (
    <dic>
      <ul>{listaLI}</ul>
    </dic>
  );
};

export default listaProdutos;
