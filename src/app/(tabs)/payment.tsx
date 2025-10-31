import Constants from "expo-constants";
import React from "react";
import { Text, View } from "react-native";

const statusBarHeight = Constants.statusBarHeight;
const HEADER_HEIGHT = 160;

export default function Payment(){
    return(
        //A view principal da tela
        <View className="flex-1 items-center bg-[#E5EAF2]">
            <View>
                <Text>Eu sou o conteúdo da tela</Text>
            </View>
            //A view do Header
            <View className="w-full bg-[#3A7DFF] absolute top-0 items-center" style={{ height: HEADER_HEIGHT }}>
                <View className="flex-row items-center" style={{marginTop: statusBarHeight + 10}}>
                    <Text className="text-white">Aqui ficam os botões</Text>
                </View>
            </View>
        </View>
    );
}