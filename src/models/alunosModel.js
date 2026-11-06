import prisma from "../config/prisma.js";

export function criar({ nome, turma }) {
  return prisma.aluno.create({
    data: {
      nome,
      turma
    }
  });
}

export function listarTodos() {
  return prisma.aluno.findMany({
    orderBy: {
      id: "asc"
    }
  });
}

export function editar() {}

export function listaAlunoId() {}

export function excluir() {}
