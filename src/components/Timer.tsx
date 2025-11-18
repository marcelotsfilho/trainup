// src/components/Timer.tsx
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useTimer } from "@/src/context/TimerContext"; // importação do hook

export default function Timer() {
  const { tempoDecorrido, iniciado, toggleCronometro } = useTimer();

  // exibuição do temmpo no formato hora:min:sec
  const formatTempo = (secs: number) => {
    const h = Math.floor(secs / 3600).toString().padStart(2, "0");
    const m = Math.floor((secs % 3600) / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };
  
  return (
    <TouchableOpacity onPress={toggleCronometro} activeOpacity={0.6}>
      <View className="pr-20 flex-row items-center">
        <Ionicons name="timer-outline" size={30} color="#FFFFFF" />
        <Text className="font-semibold text-white text-xl ml-3">
          {iniciado ? "Pausar" : "Iniciar"}
        </Text>
      </View>

      <Text className="font-semibold text-white text-2xl pr-24 mt-2">
        {formatTempo(tempoDecorrido)}
      </Text>
    </TouchableOpacity>
  );
}