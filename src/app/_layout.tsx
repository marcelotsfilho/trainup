import { Tabs } from "expo-router";
import '../styles/global.css';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="home" options={{ headerShown: false,title: "Home" }} />
      <Tabs.Screen name="login" options={{ headerShown: false,title: "Login" }} />
      <Tabs.Screen name="payment" options={{ headerShown: false,title: "Pagamentos" }} />
      <Tabs.Screen name="workout" options={{ headerShown: false,title: "Treino" }} />
      <Tabs.Screen name="profile" options={{ headerShown: false,title: "Perfil" }} />
    </Tabs>
  );
}