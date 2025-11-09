import Timer from '@/src/components/Timer';
import WorkoutCard from '@/src/components/WorkoutCard';
import Constants from "expo-constants";
import { Link } from 'expo-router';
import { Pressable, Text, View, Image } from "react-native";

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
            <View className="m-10">
                <Image 
                    source={require("../../../../assets/images/academia.png")}
                />
            </View>
            <View className="">
                <Link href="/workout/A" asChild>
                    <Pressable>
                        <WorkoutCard 
                            treino="A"
                            grupoMuscular="Peito/Ombro"
                            quantidade={11}
                        />
                    </Pressable>
                </Link>
                <Link href="/workout/B" asChild>
                    <Pressable>
                        <WorkoutCard 
                            treino="B"
                            grupoMuscular="Costas/Ombro"
                            quantidade={8}
                        />
                    </Pressable>
                </Link>
                <Link href="/workout/C" asChild>
                    <Pressable>
                        <WorkoutCard 
                            treino="C"
                            grupoMuscular="Quadriceps/Posterior"
                            quantidade={10}
                        />
                    </Pressable>
                </Link>
                <Link href="/workout/D" asChild>
                    <Pressable>
                        <WorkoutCard 
                            treino="D"
                            grupoMuscular="Ombro/Triceps"
                            quantidade={10}
                        />
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}