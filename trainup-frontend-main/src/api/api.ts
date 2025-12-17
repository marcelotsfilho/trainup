import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Utilizando o axios para facilitar requisições HTTP (realizar chamadas à API)
const api = axios.create({
  baseURL: 'https://trainup-backend.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona o token de autenticação em cada requisição, se disponível
api.interceptors.request.use(
  async (config) => {
    // Utilização do AsyncStorage para acessar o token armazenado localmente
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
