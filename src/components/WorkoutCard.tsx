import { Pressable, Text, View } from "react-native";

interface WorkoutCardProps {
  treino: string;
  grupoMuscular: string;
  quantidade: string | number;
  onPress?: () => void;
}

export default function WorkoutCard({ treino, grupoMuscular, quantidade, onPress }: WorkoutCardProps) {
  return (
    <Pressable onPress={onPress} className="flex-row w-96 h-20 bg-white m-4 rounded-2xl shadow-xl">
      <View className="flex-row justify-center items-center w-20">
        <Text className="font-regular text-4xl text-[#3A7DFF]">{treino}</Text>
      </View>
      <View className="flex-col justify-center items-center pl-5">
        <Text className="font-regular text-lg text-[#3A7DFF]">Grupos Musculares</Text>
        <Text className="text-sm text-gray-600">{grupoMuscular}</Text>
      </View>
      <View className="flex-col justify-center items-center pl-10">
        <Text className="text-2xl text-blue-500">{quantidade}</Text>
        <Text className="text-sm text-gray-600">Exercícios</Text>
      </View>
    </Pressable>
  );
}