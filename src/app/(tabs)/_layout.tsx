import { Tabs } from "expo-router";
import '../../styles/global.css';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="home"
        options={{
          title: "Home",
          // Adicione ícone aqui se desejar
        }}
      />
      <Tabs.Screen 
        name="workout"
        options={{
          title: "Treinos",
          // Adicione ícone aqui se desejar
        }}
      />
      <Tabs.Screen 
        name="payment"
        options={{
          title: "Pagamento",
          // Adicione ícone aqui se desejar
        }}
      />
      <Tabs.Screen 
        name="profile"
        options={{
          title: "Perfil",
          // Adicione ícone aqui se desejar
        }}
      />
    </Tabs>
  );
}