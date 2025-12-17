import Timer from "@/src/components/Timer";
import { TimerProvider } from "@/src/context/TimerContext";
import { WorkoutProvider } from "@/src/context/WorkoutContext";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function WorkoutStackLayout() {
  return (
    // timer context provider para gerenciar o estado do timer, fazendo com que
    // o timer esteja disponível em todas as telas dentro deste stack
    <WorkoutProvider>
      <TimerProvider>
        <Stack>
          {/* tela de seleção do grupamento muscular */}
          <Stack.Screen name="index" options={{ headerShown: false }} />

          {/* tela de seleção dos exercícios */}
          <Stack.Screen
            name="[workoutId]"
            options={{
              headerStyle: { backgroundColor: "#3A7DFF" },
              headerTintColor: "#fff",
              headerShadowVisible: false, // remove sobra do header
              headerRight: () => (
                <View className="ml-10 items-center justify-center">
                  <Timer />
                </View>
              ),
            }}
          />

          {/* tela de detalhes do exercício */}
          <Stack.Screen
            name="exercise/[exerciseId]"
            options={{
              title: "Exercício",
              headerStyle: { backgroundColor: "#3A7DFF" },
              headerTintColor: "#fff",
              headerShadowVisible: false,
              headerRight: () => (
                <View className="ml-10">
                  <View className="items-center justify-center">
                    <Timer />
                  </View>
                </View>
              ),
            }}
          />
        </Stack>
      </TimerProvider>
    </WorkoutProvider>
  );
}
