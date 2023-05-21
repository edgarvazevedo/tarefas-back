const mongoose = require("mongoose");

// Definição do modelo de tarefa
const Task = mongoose.model("Task", {
  description: String,
});
