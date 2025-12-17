import { useState } from "react";
import { Text, View } from "react-native";
import { Switch } from 'react-native-switch';

interface ExerciseCardProps{
    treino: string;
    exercicio: string;
    repeticoes: string | number;
}


export default function ExerciseCard({ treino, exercicio, repeticoes }: ExerciseCardProps){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // controla quantas linhas o texto ocupou para ajustar o padding/minHeight do card
    const [lines, setLines] = useState<number>(1);
    const onTextLayout = (e: any) => {
      const l = e.nativeEvent?.lines?.length ?? 1;
      setLines(l);
    };

    // ajuste de estilo dinâmico conforme número de linhas (mais linhas -> maior padding/minHeight)
    const containerStyle = {
      paddingVertical: lines > 2 ? 14 : 10,
      paddingHorizontal: 12,
      // ajuste de estilo dinâmico conforme número de linhas (mais linhas -> maior padding/minHeight)
      minHeight: lines > 3 ? 96 : (lines > 1 ? 80 : 64),
    };

    return(
        <View className="flex-row bg-white m-3 rounded-2xl drop-shadow-lg" style={containerStyle}>
            <View className="flex-row justify-center items-center w-20">  
                <Text className="font-regular text-4xl text-[#3A7DFF]">
                    {treino}
                </Text>
            </View>
            <View className="flex-1 justify-center pl-3 pr-2">
                {/* flexShrink faz com que o texto não ultrapasse o limite do container */}
                <Text
                  onTextLayout={onTextLayout}
                  style={{ fontSize: 18, color: '#3A7DFF', flexShrink: 1 }}
                >
                    {exercicio}
                </Text>
                {/* usando ternario, adaptamos a quantidade de linha para que o texto fique mmelhor acomodado na tela */}
                <View className={`${lines > 1 ? 'flex-col' : 'flex-row gap-2'} mt-1`}>
                    <Text className="text-[16px]">Repetições</Text>
                    <Text className={`text-[16px] text-[#3A7DFF] ${lines > 1 ? 'ml-2' : ''}`}>
                        {repeticoes}
                    </Text>
                </View>
            </View>
            <View className="justify-center items-center ml-2">
                <Switch
                    value={isEnabled}
                    onValueChange={toggleSwitch}
                    backgroundActive={'#3CCF91'} 
                    backgroundInactive={'#E6E0E9'} 
                    circleActiveColor={'#FFFFFF'}
                    circleInActiveColor={'#f4f3f4'}
                    barHeight={32} 
                    circleSize={26} 
                    circleBorderWidth={1.5} 
                    switchWidthMultiplier={2.3} // ajuste da distancia que o circulo ficará da bar
                    renderActiveText={false}
                    renderInActiveText={false}
                />
            </View>
        </View>
    );
}