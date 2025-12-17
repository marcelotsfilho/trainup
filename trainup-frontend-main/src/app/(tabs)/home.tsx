import Constants from "expo-constants";
import React from "react";
import { Image, Text, View } from "react-native";
import ProgressCard from "../../components/ProgressCard";
import WarnmingCard from "../../components/WarningCard";
import { useAuth } from "../../context/AuthContext";

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {
  const { user } = useAuth();

  return (
    <View className="flex-1 items-center bg-[#E5EAF2]">
      <View className="w-full h-40 bg-[#3A7DFF]">
        <View
          className="flex-row items-center ml-8 "
          style={{ marginTop: statusBarHeight + 10 }}
        >
          {user?.fotoPerfil ? (
            <Image
              className="w-12 h-12 rounded-full"
              source={{ uri: user.fotoPerfil }}
            />
          ) : (
            <Image
              className=""
              source={require("../../../assets/images/perfil.png")}
            />
          )}
          <Text className="font-semibold color-white text-xl w-full pl-5">
            Olá, {user?.nome?.split(" ")[0] || "usuário"}!
          </Text>
        </View>
      </View>
      <View className="flex-1 items-center justify-center">
        <ProgressCard percentual={user?.percentual} />
      </View>
      <View className="flex-1">
        <WarnmingCard />
      </View>
    </View>
  );
}
