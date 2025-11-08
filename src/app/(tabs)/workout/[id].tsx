import ExerciseCard from '@/src/components/ExerciseCard';
import { EXERCISES } from '@/src/data/exercises';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

export default function WorkoutDetailScreen() {
  const { id } = useLocalSearchParams() as { id?: string };
  const treinoId = (id || 'A').toUpperCase();
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
        // uso de tailwind para padding/spacing; mantém contentContainerStyle apenas para pb numérico
        className="px-4 mt-5"
        contentContainerStyle={{ paddingBottom: 10 }}
        // função anonima para renderizar cada item da lista
        renderItem={({ item }) => (
          <ExerciseCard treino={treinoId} exercicio={item.name} repeticoes={item.repeticoes} />
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