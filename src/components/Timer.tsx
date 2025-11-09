// src/components/Timer.tsx
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useTimer } from "@/src/context/TimerContext"; // 1. Importe o hook

export default function Timer() {
  // 2. PEGUE O ESTADO DO CONTEXTO
  // A lógica de useState e useEffect foi removida
  const { tempoDecorrido, iniciado, toggleCronometro } = useTimer();

  // A função de formatação pode continuar aqui, pois é só para exibição
  const formatTempo = (secs: number) => {
    const h = Math.floor(secs / 3600).toString().padStart(2, "0");
    const m = Math.floor((secs % 3600) / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // 3. O JSX permanece o MESMO, pois os nomes das variáveis são os mesmos
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