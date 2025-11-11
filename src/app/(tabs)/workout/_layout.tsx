// src/app/(tabs)/workout/_layout.tsx

import { Stack } from 'expo-router';
import Timer from '@/src/components/Timer'; 
import { View } from 'react-native';
import { TimerProvider } from '@/src/context/TimerContext';

export default function WorkoutStackLayout() {
  return (
    // timer context provider para gerenciar o estado do timer, fazendo com que 
    // o timer esteja disponível em todas as telas dentro deste stack
    <TimerProvider>
      <Stack>
        {/* tela de seleção do grupamento muscular */}
        <Stack.Screen 
          name="index" 
          options={{ headerShown: false }} 
        />
        
        {/* tela de seleção dos exercícios */}
        <Stack.Screen 
          name="[workoutId]"
          options={{
            headerStyle: { backgroundColor: '#3A7DFF' },
            headerTintColor: '#fff',
            headerShadowVisible: false, // remove sobra do header
            headerRight: () => (
              // COMO CENTRALIZAR O TIMER NO VIEW
              // margin-left esta servindo para empurrar o texto para a esquerda
              <View className='ml-20 items-center justify-center'>
                <Timer />
              </View>
            ),
          }} 
        />

        {/* tela de detalhes do exercício */}
        <Stack.Screen 
          name="exercise/[exerciseId]"
          options={{
            // O título será definido dinamicamente dentro do arquivo
            // ou você pode definir um padrão aqui.
            title: "Exercício",
            headerStyle: { backgroundColor: '#3A7DFF' },
            headerTintColor: '#fff',
            headerShadowVisible: false,
            headerRight: () => (
              // COMO CENTRALIZAR O TIMER NO VIEW
              // margin-left esta servindo para empurrar o texto para a esquerda
              <View className='ml-20'>
                <View className='items-center justify-center'>
                  <Timer />
                </View>
              </View>
            ),
          }} 
        />
      </Stack>
    </TimerProvider>
  );
}