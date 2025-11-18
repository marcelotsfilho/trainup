import React from 'react';
import { Stack, useLocalSearchParams, Link } from 'expo-router';
import { ActivityIndicator, FlatList, View, Pressable } from 'react-native';
import ExerciseCard from '@/src/components/ExerciseCard';
import { EXERCISES } from '@/src/data/exercises';

export default function WorkoutDetailScreen() {
  const { workoutId } = useLocalSearchParams() as { workoutId?: string };
  const treinoId = (workoutId || 'A').toUpperCase();
  const items = EXERCISES[treinoId] || [];

  return (
    <View className="flex-1 bg-[#E5EAF2]">
      <Stack.Screen
        options={{
          title: `Treino ${treinoId}`,
          headerStyle: { backgroundColor: '#3A7DFF' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          animation: 'fade',
        }}
      />

      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        className="px-4 mt-5"
        contentContainerStyle={{ paddingBottom: 10 }}
        renderItem={({ item }) => (
          // o link navega para tela com base no id do item selecionado
          <Link
            // O href aponta para a nova rota de detalhe do exercício
            // ex: /workout/exercise/remada-cavalinho
            href={`/workout/exercise/${item.id}`}
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
            <ActivityIndicator color="#3A7DFF" />
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}