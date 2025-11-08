// src/app/(tabs)/workout/_layout.tsx

import { Stack } from 'expo-router';
import Timer from '@/src/components/Timer'; // 1. Importe seu componente
import { View } from 'react-native';
import { TimerProvider } from '@/src/context/TimerContext';

export default function WorkoutStackLayout() {
  return (
    <TimerProvider>
      <Stack>
      {/* A tela principal (index) não terá cabeçalho */}
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />
      
      {/* Esta é a configuração para a tela de detalhes [id] */}
      <Stack.Screen 
        name="[id]" 
        options={{ 
          // 2. Define o estilo do cabeçalho
          headerStyle: { 
            backgroundColor: '#3A7DFF' // Seu fundo azul
          },
          
          // 3. Define a cor do título e do botão "voltar"
          headerTintColor: '#FFFFFF', // Texto em branco
          
          // 4. Remove a sombra/borda inferior
          headerShadowVisible: false,
          
          // 5. Configura o botão de voltar do iOS
          headerBackTitle: 'Voltar',
          
          // 6. Esta é a mágica: coloca seu componente na direita
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