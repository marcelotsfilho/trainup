// src/app/(tabs)/workout/[id].tsx
import { View, Text } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function WorkoutDetailScreen() {
  // Pega o 'id' da URL (ex: "A", "B" ou "C")
  const { id } = useLocalSearchParams(); 

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
      <Stack.Screen 
        options={{ 
          title: `Treino ${id}`,
          headerStyle: { backgroundColor:'#3A7DFF' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          animation: 'fade'
        }}
      />
      
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Ficha de Treino {id}
      </Text>

      {/* Listagem dos exercicios de forma estática */}
      {id === 'A' && (
        <View>
          {/* Mapeie sua lista de exercícios aqui */}
          <Text>Remada cavalinho</Text>
          <Text>Puxada aberta</Text>
          <Text>Puxada fechada</Text>
          {/* ...etc */}
        </View>
      )}
    </View>
  );
}