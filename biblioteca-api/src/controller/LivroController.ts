import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Livro } from "../entity/Livro";

export class LivroController {
  criar = async (req: Request, res: Response) => {
    try {
      const dados = req.body;
      const repo = AppDataSource.getRepository(Livro);
      const livro = repo.create(dados);
      const livroSalvo = await repo.save(livro);
      return res.status(201).json(livroSalvo);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar livro", error });
    }
  };

  async listar(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Livro);
    const livros = await repo.find();
    return res.status(200).json(livros);
  }

  async buscarPorId(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Livro);
    const { id } = req.params;
    const livro = await repo.findOneBy({ id: parseInt(id) });
    if (!livro) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    return res.status(200).json(livro);
  }

  async atualizar(req: Request, res: Response) {
    const { id } = req.params;
    const novosDados = req.body;
    const repo = AppDataSource.getRepository(Livro);
    const livro = await repo.findOneBy({ id: parseInt(id) });
    if (!livro) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    repo.merge(livro, novosDados);
    const livroAtualizado = await repo.save(livro);
    return res.status(200).json(livroAtualizado);
  }

  async deletar(req: Request, res: Response) {
    const { id } = req.params;
    const repo = AppDataSource.getRepository(Livro);
    const livro = await repo.findOneBy({ id: parseInt(id) });
    if (!livro) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    await repo.remove(livro);
    return res.status(204).json({ message: "Livro deletado com sucesso" });
  }
}
