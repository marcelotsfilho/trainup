import { Link } from "expo-router";
import { Pressable, Text, View, Image, ActivityIndicator } from "react-native";
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