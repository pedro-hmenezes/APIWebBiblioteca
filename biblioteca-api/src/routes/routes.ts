import { Router } from "express";
import { LivroController } from "../controller/LivroController";

const router = Router();
const controller = new LivroController();

router.post("/livros", controller.criar);
router.get("/livros", controller.listar);
router.get("/livros/:id", controller.buscarPorId);
router.put("/livros/:id", controller.atualizar);
router.delete("/livros/:id", controller.deletar);

export { router };
