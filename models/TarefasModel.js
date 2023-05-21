const { Schema, model } = require("mongoose");

// Definição do modelo de tarefa
const TarefasSchema = new Schema({
  description: String,
});

const TarefasModel = model("Tarefas", TarefasSchema);
module.exports = TarefasModel;
