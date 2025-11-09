// src/app/(tabs)/workout/_layout.tsx

import { Stack } from 'expo-router';
import Timer from '@/src/components/Timer'; 
import { View } from 'react-native';
import { TimerProvider } from '@/src/context/TimerContext';

export default function WorkoutStackLayout() {
  return (
    <TimerProvider>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ headerShown: false }} 
        />
        
        {/* 1. ATUALIZE O NOME DA TELA 2 (se você renomeou) */}
        <Stack.Screen 
          name="[workoutId]" // <-- Mudou de [id]
          options={{ 
            headerStyle: { backgroundColor: '#3A7DFF' },
            headerTintColor: '#FFFFFF',
            headerShadowVisible: false,
            headerBackTitle: 'Voltar',
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <Timer />
              </View>
            ),
          }} 
        />

        {/* 2. ADICIONE A NOVA TELA 3 (Detalhe do Exercício) */}
        <Stack.Screen 
          name="exercise/[exerciseId]" // <-- Este é o caminho da nova tela
          options={{
            // O título será definido dinamicamente dentro do arquivo
            // ou você pode definir um padrão aqui.
            title: "Exercício",
            
            // Reutilize o estilo do header
            headerStyle: { backgroundColor: '#3A7DFF' },
            headerTintColor: '#FFFFFF',
            headerShadowVisible: false,
            headerBackTitle: 'Voltar',
            
            // Você pode querer o Timer aqui também
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <Timer />
              </View>
            ),
          }} 
        />
      </Stack>
    </TimerProvider>
  );
}