const mongoose = require("mongoose");

// Conexão com o banco de dados MongoDB
mongoose.connect("mongodb://localhost/todo_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
