import Constants from "expo-constants";
import React from "react";
import { Image, Text, View } from "react-native";
import ProgressCard from "../../components/ProgressCard";
import WarnmingCard from "../../components/WarningCard";
import { useAuth } from "../../context/AuthContext";

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {
  // pegando os dados do usuario que esta logado
  // estes dados vem do context
  const { user } = useAuth();

  return (
    <View className="flex-1 items-center bg-[#E5EAF2]">
      <View className="w-full h-40 bg-[#3A7DFF]">
        <View
          className="flex-row items-center ml-8 "
          style={{ marginTop: statusBarHeight + 10 }}
        >
          {/* se o usuario tiver foto de perfil, reenderiza ela */}
          {user?.fotoPerfil ? (
            <Image
              className="w-12 h-12 rounded-full"
              source={{ uri: user.fotoPerfil }}
            />
          ) : (
            // se nao tiver, reenderiza a imagem padrao
            <Image
              className=""
              source={require("../../../assets/images/perfil.png")}
            />
          )}
          <Text className="font-semibold color-white text-xl w-full pl-5">
            {/* pegando o nome do usuario logado */}
            Olá, {user?.nome?.split(" ")[0] || "usuário"}!
          </Text>
        </View>
      </View>
      <View className="flex-1 items-center justify-center">
        {/* componente de progresso de cada usuario */}
        <ProgressCard percentual={user?.percentual} />
      </View>
      <View className="flex-1">
        <WarnmingCard />
      </View>
    </View>
  );
}
