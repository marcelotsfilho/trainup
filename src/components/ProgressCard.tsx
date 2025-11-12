import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function ProgressCard(){
    return(
        <View className="w-96 h-64 bg-white rounded-3xl">
            <Text className="pt-8 pl-10 font-semibold text-lg">Sessões realizadas</Text>
            <Text className="pt-5 pl-10 font-semibold text-lg color-[#0048FF]">0/30</Text>
            {/* barra de status */}
            <View className="w-80 h-6 bg-[#E5EAF2] rounded-lg mt-5 ml-10"></View>
            <View className="mt-5 items-center">
                {/* TODO: Alterar a rota */}
                <Link href={"/workout"} asChild>
                    <Pressable className="h-16 w-60 items-center justify-center border-[#3A7DFF] border-2 rounded-full ">
                        <Text className="text-black text-lg">Próximo treino</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}