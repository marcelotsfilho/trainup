import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Obtem a URI do MongoDB a partir das variáveis de ambiente
const MONGODB_URI = process.env.MONGO_URI;


// Verifica se a URI está definida
if (!MONGODB_URI) {
  console.error("MONGO_URI não está definida nas variáveis de ambiente");
}


// Cache da conexão para evitar múltiplas conexões em ambientes serverless
let cached = (global as any).mongoose;


// Se não houver cache, inicializa um novo objeto de cache
if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}


// Função para conectar ao banco de dados
const connectDB = async () => {
  // Verifica novamente se a URI está definida
  if (!MONGODB_URI) {
    throw new Error("MONGO_URI não está definida nas variáveis de ambiente");
  }


  // Retorna a conexão em cache se já estiver estabelecida
  if (cached.conn) {
    return cached.conn;
  }

  // Se não houver uma promessa de conexão em andamento, cria uma nova
  if (!cached.promise) {
    // Opções de conexão do Mongoose
    const opts = {
      bufferCommands: false,
    };

    // Inicia a conexão com o MongoDB
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  // Aguarda a promessa de conexão e armazena a conexão em cache
  try {
    cached.conn = await cached.promise;
    console.log(`MongoDB Conectado: ${cached.conn.connection.host}`);
  } catch (e) {
    // Em caso de erro, limpa a promessa em cache para permitir novas tentativas
    cached.promise = null;
    console.error(`Erro: ${(e as Error).message}`);
    throw e;
  }

  return cached.conn;
};

export default connectDB;
