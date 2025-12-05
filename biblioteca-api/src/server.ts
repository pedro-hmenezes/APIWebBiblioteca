import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { router } from "./routes/routes";

const app = express();

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("API da Biblioteca está no AR!");
});

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado com sucesso!");
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch((error: any) =>
    console.log("Erro ao conectar ao banco de dados:", error)
  );
