import Timer from '@/src/components/Timer';
import WorkoutCard from '@/src/components/WorkoutCard';
import { Ionicons } from '@expo/vector-icons';
import Constants from "expo-constants";
import { Text, View } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

export default function Workout(){
    return(
        <View
            className="flex-1 items-center bg-[#E5EAF2]"
        >
            <View className="w-full h-40 bg-[#3A7DFF] flex-row">
                <View
                    style={{marginTop: statusBarHeight+10}}
                    className="items-start pl-10 w-[30%]"
                >
                    <Text className="font-semibold text-white text-2xl w-full pt-10">Treino</Text>
                </View>
                <View className="justify-center items-end w-[70%] pt-5">
                    <Timer />
                </View>
            </View>
            <View className="">
                <WorkoutCard 
                    treino="A"
                    grupoMuscular="Bíceps/Costa/Ombro"
                    quantidade={11}
                />
                <WorkoutCard 
                    treino="B"
                    grupoMuscular="Perna/Glúteo"
                    quantidade={8}
                />
                <WorkoutCard 
                    treino="C"
                    grupoMuscular="Peito/Tríceps"
                    quantidade={10}
                />
            </View>
        </View>
    )
}