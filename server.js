const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const TarefasModel = require("./models/TarefasModel");

const app = express();
app.use(express.json());

// Configurar o CORS
app.use(cors());

// Configuração da conexão com o MongoDB
mongoose
  .connect("mongodb://localhost:27017/tarefas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso.");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

// Rota para obter todas as tarefas
app.get("/tarefas", async (req, res) => {
  try {
    const tarefas = await TarefasModel.find();
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tarefas." });
  }
});

// Rota para criar uma nova tarefa
app.post("/tarefas", async (req, res) => {
  const { descricao, prioridade } = req.body;
  try {
    const tarefas = new TarefasModel({ descricao, prioridade });
    await tarefas.save();
    res.json(tarefas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar tarefas." });
  }
});

// Rota para atualizar uma tarefa
app.put("/tarefas/:id", async (req, res) => {
  const { id } = req.params;
  const { descricao, prioridade } = req.body;
  try {
    const tarefas = await TarefasModel.findByIdAndUpdate(
      id,
      { descricao, prioridade },
      { new: true }
    );
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar tarefa." });
  }
});

// Rota para excluir uma tarefa
app.delete("/tarefas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await TarefasModel.findByIdAndRemove(id);
    res.json({ message: "Tarefa excluída com sucesso." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir tarefa." });
  }
});

// Inicialização do servidor
app.listen(5000, () => {
  console.log("Servidor iniciado na porta 5000");
});
