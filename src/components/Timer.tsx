import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Timer() {
    // definição dos estados(hooks) para as funções do cronometro
    const [tempoDecorrido, setTempoDecorrido] = useState(0);
    const [iniciado, setIniciado] = useState(false);

    useEffect(() => {
        // definição da variavel de intervalo para o cronometro que incrementa o tempo a cada segundo
        // uma forma de burlar o typescript para aceitar o tipo retornado pelo setInterval
        let interval: ReturnType<typeof setInterval> | null = null;

        if(iniciado){
            interval = setInterval(() => {
                // incrementa o tempo decorrido a cada segundo
                setTempoDecorrido((prev) => prev + 1);
        }, 1000);
        }
        return () => {
            // limpa o intervalo quando o componente é desmontado ou quando o cronometro é pausado
            if(interval){
                clearInterval(interval);
            }
        };
    }, [iniciado]);

    // função para iniciar ou pausar o cronometro
    const toggleCronometro = () => setIniciado((v) => !v);

    // função para formatar o tempo decorrido em horas, minutos e segundos
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