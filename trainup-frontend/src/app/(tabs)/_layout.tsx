import { Ionicons } from '@expo/vector-icons'; // novo import
import { Tabs } from "expo-router";
import '../../styles/global.css';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3CCF91',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#3A7DFF',
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems:'center',
          paddingBottom: 20,
          paddingTop: 10,
        }
      }}
    >
      {/*Aqui são definidas as abas do aplicativo */}
      <Tabs.Screen
        name="home"
        //Aqui é definido o que é específico desta aba
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: "Treinos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Pagamento",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}