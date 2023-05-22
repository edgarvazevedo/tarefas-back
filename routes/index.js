// const express = require("express");
// const router = express.Router();

// const TarefasModel = require("../models/TarefasModel");

// // Rota para criar uma nova tarefa
// router.post("/tarefas", async (req, res) => {
//   const { descricao } = req.body;
//   try {
//     const tarefas = new TarefasModel({ descricao });
//     await tarefas.save();
//     res.json(tarefas);
//   } catch (error) {
//     res.status(500).json({ error: "Erro ao criar uma tarefa." });
//   }
// });

// module.exports = router;
