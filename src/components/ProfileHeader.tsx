import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Training from "./Training";

export default function ProfileHeader({
    title
}:{
    title: string
}){
    return(
        <View className="w-[100%] h-[272px] bg-[#3A7DFF] pt-16 pb-12 mb-16 items-center">
            <View className="w-[70px] h-[70px] rounded-full bg-white items-center justify-center">
                <Icon name="account" size={40} color="#3A7DFF" />
            </View>
            <Text className="font-[SF Pro] font-semibold text-lg leading-[22px] tracking-normal text-[#FFFFFF] text-center mt-8">{title}</Text>
            <Text className="font-[SF Pro] font-semibold text-base leading-[22px] tracking-normal text-[#FFFFFF] text-center">Matrícula 0000</Text>
            <Training title='Treinos Realizados'/>
        </View>
    );
}