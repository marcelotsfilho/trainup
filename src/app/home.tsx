import React from "react"
import { View, Text, Image } from "react-native"
import ProgressCard from "../components/ProgressCard";
import Constants  from "expo-constants";
import WarnmingCard from "../components/WarningCard";

const statusBarHeight = Constants.statusBarHeight;

export default function Home(){
    return(
        <View 
            className="flex-1 items-center bg-[#E5EAF2]"
            // style={{marginTop: statusBarHeight+10}}
        >
            <View className="w-full h-40 bg-[#3A7DFF]">
                <View
                    className="flex-row items-center ml-8 "
                    style={{marginTop: statusBarHeight+10}}
                >
                    <Image 
                        className=""
                        source={require('../../assets/images/perfil.png')}
                    />
                    <Text className="font-semibold color-white text-xl w-full pl-5">Olá, usuário!</Text>
                </View>
            </View>
            <View className="flex-1 items-center justify-center">
                <ProgressCard />
            </View>
            <View className="flex-1">
                <WarnmingCard />
            </View>
        </View>
    );
}