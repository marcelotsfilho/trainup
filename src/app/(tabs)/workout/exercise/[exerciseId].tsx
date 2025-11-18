import StepNavigator from '@/src/components/StepNavigator';
import { EXERCISES } from '@/src/data/exercises';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, Text, View } from 'react-native';

export default function ExerciseDetailScreen() {
  const { exerciseId } = useLocalSearchParams();
  
  // Encontra o exercício com base no ID
  const findExercise = () => {
    for (const group of Object.values(EXERCISES)) {
      const exercise = group.find(ex => ex.id === exerciseId);
      if (exercise) return exercise;
    }
    return null;
  };

  const exercise = findExercise();

  if (!exercise) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg text-gray-600">Exercício não encontrado</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-[#E5EAF2]">
      <Stack.Screen 
        options={{
          title: exercise.name,
          headerStyle: { backgroundColor: '#3A7DFF' },
          headerTintColor: '#fff',
          
        }}
      />
      
      <View className="w-96 h-[410px] bg-white rounded-3xl flex-col p-4">
        <View className="flex-1 items-center justify-center">
          {exercise.gifUrl ? (
            <Image 
              source={{ uri: exercise.gifUrl }}
              className="w-full h-full rounded-xl"
              resizeMode="contain"
            />
          ) : (
            <View className="w-full h-full bg-gray-100 rounded-xl items-center justify-center">
              <Text className="text-gray-400">Imagem não disponível</Text>
            </View>
          )}
        </View>
        
        <View className="flex-row justify-around items-center py-4">
          <View className="items-center">
            <Text className="text-lg font-bold text-[#3A7DFF]">{exercise.repeticoes}</Text>
            <Text className="text-sm text-gray-600">Repetições</Text>
          </View>
          <View className="h-12 w-[1px] bg-gray-200" />
          <View className="items-center">
            <Text className="text-lg font-bold text-[#3A7DFF]">{exercise.carga}</Text>
            <Text className="text-sm text-gray-600">Carga</Text>
          </View>
        </View>
      </View>
      
      <View className='items-center justify-center pt-10'>
        <StepNavigator />
      </View>
    </View>
  );
}