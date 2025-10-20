import Constants from "expo-constants";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    async function prepareApp() {
      // aqui vai toda a logica de carregamento:
      // await carregarDadosDoUsuario();
      // await carregarConfiguracoes();

      // simulando um carregamento utilizando delay:
      await new Promise((resolve) => setTimeout(resolve, 3500));

      if (mounted) {
        // Substitui a rota atual por /login (não permite voltar para o splash)
        router.replace("/login");
      }
    }

    prepareApp();

    return () => {
      mounted = false;
    };
  }, [router]);

  return (
    <View
      style={{ marginTop: statusBarHeight + 10 }}
      className="flex-1 bg-[#3A7DFF] items-center justify-center"
    >
      <Image
        className="w-80 h-80"
        source={require("../../../assets/images/logo-branca.png")}
      />
      <View className="pt-52 w-80">
        <Text className="text-white font-semibold text-lg text-center">
          Controle para para academia, evolução para o aluno
        </Text>
        <View className="pt-10">
          <ActivityIndicator color="#fff" />
        </View>
      </View>
    </View>
  );
}