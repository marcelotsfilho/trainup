import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { User, loginUser } from "../api/services";

interface AuthContextData {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Se tiver dados no storage, mantem o usuareio logado
  useEffect(() => {
    async function loadStorageData() {
      const storedUser = await AsyncStorage.getItem("userData");
      const storedToken = await AsyncStorage.getItem("userToken");

      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  // caso nao tenha usuario no storage, redireciona para o login
  async function signIn(email: string, password: string) {
    try {
      const response = await loginUser(email, password);

      if (response.success) {
        const { token, data } = response;

        await AsyncStorage.setItem("userToken", token);
        await AsyncStorage.setItem("userData", JSON.stringify(data));

        setUser(data);
        router.replace("/(tabs)/home");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // função de logout do sistema
  async function signOut() {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userData");
    setUser(null);
    router.replace("/(stack)/login");
  }

  // passagem dentro de um context para nao perder o estado do usuario(nao perder os dados ao navegar entre telas)
  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
