import { saveWorkoutHistory } from "@/src/api/services";
import ExerciseCard from "@/src/components/ExerciseCard";
import { useAuth } from "@/src/context/AuthContext";
import { useTimer } from "@/src/context/TimerContext";
import { useWorkouts } from "@/src/context/WorkoutContext";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

export default function WorkoutDetailScreen() {
  const { workoutId } = useLocalSearchParams() as { workoutId?: string };
  // Pegando os exercícios do contexto de treinos
  const { exercises, loading } = useWorkouts();
  const { tempoDecorrido, iniciado, toggleCronometro, resetCronometro } = useTimer();
  const { user } = useAuth();
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  //Use o workoutId, se ele não existir, usa a letra 'A' como padrão.
  const treinoId = (workoutId || "A").toUpperCase();
  // Pega os exercícios do treino baseado no ID do treino.
  const items = exercises[treinoId] || [];

  const handleStartWorkout = () => {
    if (!iniciado) {
      toggleCronometro();
    }
  };

  const handleFinishWorkout = async () => {
    if (!user?._id) return;

    if (tempoDecorrido === 0) {
      Alert.alert("Aviso", "O treino ainda não começou ou tem duração de 0 segundos.");
      return;
    }

    // Se estiver rodando, pausa
    if (iniciado) {
      toggleCronometro();
    }

    // Pega o ID do último exercício da lista
    const lastExercise = items.length > 0 ? items[items.length - 1] : null;
    const idToSend = lastExercise ? lastExercise._id : treinoId;

    setSaving(true);
    try {
      await saveWorkoutHistory({
        userId: user._id,
        workoutId: idToSend,
        durationSeconds: tempoDecorrido,
      });
      
      Alert.alert("Sucesso", "Treino finalizado e salvo com sucesso!", [
        {
          text: "OK",
          onPress: () => {
            resetCronometro();
            router.back();
          }
        }
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível salvar o histórico do treino.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 bg-[#E5EAF2] items-center justify-center">
        <ActivityIndicator size="large" color="#3A7DFF" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#E5EAF2]">
      <Stack.Screen
        options={{
          title: `Treino ${treinoId}`,
          headerStyle: { backgroundColor: "#3A7DFF" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          animation: "fade",
        }}
      />

      <FlatList
        data={items}
        keyExtractor={(it) => it._id}
        className="px-4 mt-5"
        contentContainerStyle={{ paddingBottom: 100 }} // Espaço para o botão
        renderItem={({ item }) => (
          // o link navega para tela com base no id do item selecionado
          <Link
            // O href aponta para a nova rota de detalhe do exercício
            // ex: /workout/exercise/remada-cavalinho
            href={`/workout/exercise/${item._id}`}
            asChild // 'asChild' passa as propriedades de navegação para o Pressable
          >
            <Pressable>
              <ExerciseCard
                treino={treinoId}
                exercicio={item.name}
                repeticoes={item.repeticoes}
              />
            </Pressable>
          </Link>
        )}
        ListEmptyComponent={
          <View className="p-4 items-center">
            <Text className="text-gray-500">Nenhum exercício encontrado.</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />

      <View className="absolute bottom-10 w-full items-center px-4">
        {tempoDecorrido === 0 && !iniciado ? (
          <Pressable
            className="w-full h-14 bg-[#3A7DFF] rounded-full items-center justify-center shadow-lg"
            onPress={handleStartWorkout}
          >
            <Text className="text-white font-bold text-lg">INICIAR TREINO</Text>
          </Pressable>
        ) : (
          <Pressable
            className="w-full h-14 bg-[#FF4C4C] rounded-full items-center justify-center shadow-lg"
            onPress={handleFinishWorkout}
            disabled={saving}
          >
            {saving ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text className="text-white font-bold text-lg">FINALIZAR TREINO</Text>
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
}
