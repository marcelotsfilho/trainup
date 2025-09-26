import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl">Teste Home page</Text>
      <Link href="/login" asChild>
        <Pressable className="mt-8 px-4 py-2 bg-blue-500 rounded">
          <Text className="text-white text-lg">Ir para Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}