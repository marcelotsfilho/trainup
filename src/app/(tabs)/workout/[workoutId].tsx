import { Link, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
// 1. Importe 'Pressable'
import ExerciseCard from '@/src/components/ExerciseCard';
import { EXERCISES } from '@/src/data/exercises';
import { ActivityIndicator, FlatList, Pressable, View } from 'react-native';

export default function WorkoutDetailScreen() {
  //Se o usuário navegou para a página /workout/B, o useLocalSearchParams() pega esse B e o salva na variável workoutId.
  // 2. Renomeado 'id' para 'workoutId' para clareza
  const { workoutId } = useLocalSearchParams() as { workoutId?: string };
  //Use o workoutId, se ele não existir, use a letra 'A' como padrão.
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
        
        // 3. Alteração principal no renderItem
        renderItem={({ item }) => (
          // O Link 'sabe' para onde navegar
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