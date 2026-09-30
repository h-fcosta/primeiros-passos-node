import alunos from "../data/alunos.js";

export function listarAlunos(req, res) {
  res.json(alunos);
}

export function buscarAluno(req, res) {
  const id = Number(req.params.id);

  const aluno = alunos.find((aluno) => aluno.id === id);

  if (!aluno) {
    return res.status(404).json({
      message: "Aluno não encontrado"
    });
  }

  res.json(aluno);
}

export function cadastrarAluno(req, res) {
  const novoAluno = {
    id: alunos.length + 1,
    nome: req.body.nome,
    turma: req.body.turma
  };

  alunos.push(novoAluno);

  res.status(201).json({
    mensagem: "Aluno cadastrado com sucesso",
    aluno: novoAluno
  });
}

export function editarAluno(req, res) {
  const id = Number(req.params.id);
  const { nome, turma } = req.body;

  const aluno = alunos.find((aluno) => aluno.id === id);

  if (!aluno) {
    return res.status(404).json({
      message: "Aluno não encontrado"
    });
  }

  if (nome) {
    aluno.nome = nome;
  }

  if (turma) {
    aluno.turma = turma;
  }

  res.json(aluno);
}

export function removerAluno(req, res) {
  const id = Number(req.params.id);

  const alunoIndex = alunos.findIndex((aluno) => aluno.id === id);

  if (alunoIndex === -1) {
    return res.status(404).json({
      message: "Aluno não encontrado"
    });
  }

  alunos.splice(alunoIndex, 1);

  res.json({
    message: "Aluno removido com sucesso"
  });
}
