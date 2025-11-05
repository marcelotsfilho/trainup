import Timer from '@/src/components/Timer';
import WorkoutCard from '@/src/components/WorkoutCard';
import Constants from "expo-constants";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

export default function Workout(){
  const router = useRouter();

  return (
    <View className="flex-1 items-center bg-[#E5EAF2]">
      <View className="w-full h-40 bg-[#3A7DFF] flex-row">
        <View style={{marginTop: statusBarHeight+10}} className="items-start pl-10 w-[30%]">
          <Text className="font-semibold text-white text-2xl w-full pt-10">Treino</Text>
        </View>
        <View className="justify-center items-end w-[70%] pt-5">
          <Timer />
        </View>
      </View>

      <View>
        <WorkoutCard 
          treino="A"
          grupoMuscular="Bíceps/Costa/Ombro"
          quantidade={11}
          onPress={() => router.push(`/(tabs)/workout/A`)} // navega para /workout/A
        />
        <WorkoutCard 
          treino="B"
          grupoMuscular="Perna/Glúteo"
          quantidade={8}
          onPress={() => router.push(`/(tabs)/workout/B`)}
        />
        <WorkoutCard 
          treino="C"
          grupoMuscular="Peito/Tríceps"
          quantidade={10}
          onPress={() => router.push(`/(tabs)/workout/C`)}
        />
      </View>
    </View>
  );
}