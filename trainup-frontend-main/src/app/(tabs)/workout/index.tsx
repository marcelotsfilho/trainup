import Timer from "@/src/components/Timer";
import WorkoutCard from "@/src/components/WorkoutCard";
import { useWorkouts } from "@/src/context/WorkoutContext";
import Constants from "expo-constants";
import { Link } from "expo-router";
import {
    ActivityIndicator,
    Image,
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";

const statusBarHeight = Constants.statusBarHeight;

export default function Workout() {
  const { exercises, loading } = useWorkouts();
  const workoutKeys = Object.keys(exercises).sort();

  return (
    <View className="flex-1 items-center bg-[#E5EAF2]">
      <View className="w-full h-40 bg-[#3A7DFF] flex-row">
        <View
          style={{ marginTop: statusBarHeight + 10 }}
          className="items-start pl-10 w-[30%]"
        >
          <Text className="font-semibold text-white text-2xl w-full pt-10">
            Treino
          </Text>
        </View>
        <View className="justify-center items-end w-[70%] pt-5">
          <Timer />
        </View>
      </View>
      <View className="m-10">
        <Image source={require("../../../../assets/images/academia.png")} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#3A7DFF" />
      ) : (
        <ScrollView
          className="w-full"
          contentContainerStyle={{ alignItems: "center" }}
        >
          {workoutKeys.length === 0 ? (
            <Text className="text-gray-500 mt-10">
              Nenhum treino encontrado.
            </Text>
          ) : (
            workoutKeys.map((key) => (
              <Link key={key} href={`/workout/${key}`} asChild>
                <Pressable>
                  <WorkoutCard
                    treino={key}
                    grupoMuscular={`Treino ${key}`} // Placeholder since API doesn't return muscle group
                    quantidade={exercises[key].length}
                  />
                </Pressable>
              </Link>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
}
