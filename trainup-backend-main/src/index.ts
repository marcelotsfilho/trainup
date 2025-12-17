import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db";
import usersRouter from "./routes/users";
import exercisesRouter from "./routes/exercises";

dotenv.config();

const app = express();
// configuração dos middlewares
app.use(cors());
// Middleware para passar JSON no corpo das requisições
app.use(express.json());

// Para cada requisição, garantir que a conexão com o banco de dados esteja estabelecida
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Falha na conexão com o banco de dados:", error);
    res.status(500).json({ 
      error: "Falha na conexão com o banco de dados", 
      details: (error as Error).message 
    });
  }
});

// configuração das rotas
app.use("/users", usersRouter);
app.use("/exercises", exercisesRouter);
app.get("/", (req, res) => {
  const MONGODB_URI = process.env.MONGO_URI || "não definido";
  console.log(`URI do MongoDB: ${MONGODB_URI}`);
  res.send("API está em execução, MongoDB conectado.");
});

// inicia o servidor
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Servidor em execução em http://localhost:${PORT}`);
  });
}

export default app;
