import { Link } from "expo-router";
import { Pressable, Text, View, Image } from "react-native";
import Constats from "expo-constants";

const statusBarHeight = Constats.statusBarHeight;

export default function Index() {
  return (
    <View 
      // style={{ marginTop: statusBarHeight + 10 }}
      className="flex-1 bg-[#3A7DFF] items-center justify-center"
    >
      <Image
        className="w-80 h-80"
        source={require('../../assets/images/logo-branca.png')}
      />
      {/* botão temporario apenas para testar as demais rotas */}
      <Link href="/login" asChild>
        <Pressable className="mt-8 px-4 py-2 bg-white rounded">
          <Text className="text-black text-lg">Ir para Login</Text>
        </Pressable>
      </Link>
      <View className="mt-28 w-80">
        <Text className="text-white font-semibold text-lg text-center">
          Controle para para academia, evolução para o aluno
        </Text>
      </View>
    </View>
  );
}