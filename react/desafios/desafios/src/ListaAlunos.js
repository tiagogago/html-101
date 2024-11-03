import alunos from "./data/alunos";

const listaAlunos = () => {
  const alunoLI = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id} {aluno.nome} - {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul>{alunoLI}</ul>
    </div>
  );
};

export default listaAlunos;
