import api from "./api";

// As interfaces definem a estrutura dos dados que são esperados da API quando fizer as chamadas
export interface User {
  _id: string;
  email: string;
  nome: string;
  celular?: string;
  matricula?: string;
  percentual?: number;
  cpf?: string;
  dataNascimento?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  fotoPerfil?: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  data: User;
}

export interface Payment {
  _id: string;
  mes: string;
  dataVenc: string;
  valor: string;
  status: "aberto" | "pago";
  user: string;
}

export interface PaymentsResponse {
  success: boolean;
  data: Payment[];
}

export interface Exercise {
  _id: string;
  user: string;
  group: string;
  name: string;
  repeticoes: string;
  carga: string;
  gifUrl: string;
}

export interface ExercisesResponse {
  success: boolean;
  data: Record<string, Exercise[]>;
}

export interface WorkoutHistoryRequest {
  userId: string;
  workoutId: string;
  durationSeconds: number;
}

// Funções para interagir com a API
export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  // Chamada da API para o login do usuario
  const response = await api.post<LoginResponse>("/users/login", {
    email,
    password,
  });
  return response.data;
};

export const getUserPayments = async (userId: string): Promise<Payment[]> => {
  // Chamada da API para obter os pagamentos do usuario
  const response = await api.get<PaymentsResponse>(`/users/${userId}/payments`);
  return response.data.data;
};

export const getUserExercises = async (
  userId: string
): Promise<Record<string, Exercise[]>> => {
  // Chamada da API para obter os exercicios do usuario
  const response = await api.get<ExercisesResponse>(
    `/exercises/user/${userId}`
  );
  return response.data.data;
};

export const saveWorkoutHistory = async (data: WorkoutHistoryRequest): Promise<void> => {
  // Chamada da API para salvar o historico de treino
  await api.post('/exercises/history', data);
};
