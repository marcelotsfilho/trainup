import Constants from "expo-constants";
import { Link } from "expo-router";
import React from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
    Keyboard,
    Pressable,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { useAuth } from "../../context/AuthContext";

const statusBarHeight = Constants.statusBarHeight;

export default function Login() {
  // inicialização do router
  // estados(hooks) para armazenar os valores
  const [user, onChangeUser] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const { signIn } = useAuth();

  const hendleLogin = async () => {
    if (!user || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);
    try {
      await signIn(user, password);
      // Navigation is handled in AuthContext
    } catch (error) {
      Alert.alert("Erro", "Usuário ou senha incorretos.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        className="flex-1 items-center bg-white"
        style={{ marginTop: statusBarHeight + 10 }}
      >
        <View className="mt-20">
          <Image
            className="w-72 h-72"
            source={require("../../../assets/images/logo-azul.png")}
          />
        </View>
        <View className="mx-16 mt-10">
          <TextInput
            className="h-14 w-[320px] border border-[#3A7DFF] rounded-xl px-3 mt-10"
            onChangeText={onChangeUser}
            value={user}
            placeholder="Login"
            placeholderTextColor={"#000"}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            className="h-14 w-[320px] border border-[#3A7DFF] rounded-xl px-3 mt-5"
            onChangeText={onChangePassword}
            value={password}
            placeholder="Senha"
            placeholderTextColor={"#000"}
            secureTextEntry={true}
          />
        </View>
        <View className="mt-28">
          <Pressable
            className="h-16 w-60 items-center justify-center mt-8 px-4 py-2 bg-blue-500 rounded-full "
            onPress={hendleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text className="text-white text-xl">ENTRAR</Text>
            )}
          </Pressable>
        </View>
        <View className="mt-10">
          {/* rota temporaria para caso deseja visualizar tela de carregamento */}
          <Link href="/" asChild>
            <Pressable>
              <Text className="text-[#3A7DFF] text-lg">
                Voltar tela de carregamento
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
