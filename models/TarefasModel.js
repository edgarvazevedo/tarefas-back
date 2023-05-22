const { Schema, model } = require("mongoose");

// Definição do modelo de tarefa
const TarefasSchema = new Schema({
  descricao: String,
  prioridade: String,
});

const TarefasModel = model("Tarefas", TarefasSchema);
module.exports = TarefasModel;
