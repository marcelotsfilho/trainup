import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Constants from "expo-constants";
import Timer from "@/src/components/Timer";

export default function WorkoutDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View className="flex-1 ">
      <View className="w-full h-40 bg-[#3A7DFF] flex-row">
        <View style={{marginTop: statusBarHeight+10}} className="items-start pl-10 w-[30%]">
          <Text className="font-semibold text-white text-2xl w-full pt-10">Treino {id}</Text>
        </View>
        <View className="justify-center items-end w-[70%] pt-5">
          <Timer />
        </View>
      </View>
    </View>
  );
}