import { Stack } from "expo-router";

export default function WorkoutLayout() {
  // Stack aninhado: expo-router irá mapear index.tsx e [id].tsx automaticamente
  return <Stack screenOptions={{ headerShown: false }} />;
}