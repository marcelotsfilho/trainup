import { View, Text } from "react-native";

interface WorkoutCardProps {
  treino: string;
  grupoMuscular: string;
  quantidade: string | number;
}

export default function WorkoutCard({ treino, grupoMuscular, quantidade }: WorkoutCardProps) {
  return (
    <View className="flex-row w-96 h-20 bg-white m-3 rounded-2xl drop-shadow-lg">
        <View className="flex-row justify-center items-center w-20">
            <Text className="font-regular font-[SF Pro] text-4xl text-[#3A7DFF]">{treino}</Text>
        </View>
        <View className="flex-col justify-center items-center pl-5">
            <Text className="font-regular font-[SF Pro] text-lg text-[#3A7DFF]">Grupos Musculares</Text>
            <Text className="text-sm text-gray-600">{grupoMuscular}</Text>
        </View>
        <View className="flex-col justify-center items-center pl-10">
            <Text className="text-2xl text-blue-500">{quantidade}</Text>
            <Text className="text-sm text-gray-600">Exercícios</Text>
        </View>
    </View>
  );
}