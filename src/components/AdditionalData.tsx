import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AdditionalData({
    title
}:{
    title: string
}){
    return(
        <View className="w-[315px] h-[220px] bg-white rounded-[10px] px-4 shadow-lg mt-6 left-10">
            <View className="p-4 border-b border-[#000000] flex flex-row items-center gap-2">
                <Icon name="clipboard-text-outline" size={30} color="#000000" />
                <Text className="font-[SF Pro] font-semibold text-xs leading-[22px] tracking-normal text-[#000000]">{title}</Text>
            </View>
            <View className="pt-5">
                <Text className="text-[#3A7DFF] font-[SF Pro] text-xs font-semibold leading-[22px] tracking-normal">Celular</Text>
                <Text className="text-[#3A7DFF] font-[SF Pro] text-xs font-semibold leading-[22px] tracking-normal">Endereço</Text>
                <Text className="text-[#3A7DFF] font-[SF Pro] text-xs font-semibold leading-[22px] tracking-normal">Bairro</Text>
                <Text className="text-[#3A7DFF] font-[SF Pro] text-xs font-semibold leading-[22px] tracking-normal">Cidade</Text>
                <Text className="text-[#3A7DFF] font-[SF Pro] text-xs font-semibold leading-[22px] tracking-normal">Estado</Text>
            </View>
        </View>
    );
}