import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AdditionalData({
    title,
    celular,
    endereco,
    bairro,
    cidade,
    estado 
}:{
    title: string,
    celular: string,
    endereco: string,
    bairro: string,
    cidade: string,
    estado: string
}){
    return(
        <View className="w-[336px] -ml-20 h-[220px] bg-white rounded-[10px] px-4 shadow-lg mt-6 left-10">
            <View className="p-4 border-b border-[#000000] flex flex-row items-center gap-2">
                <Icon name="clipboard-text-outline" size={30} color="#000000" />
                <Text className="font-[SF Pro] font-semibold text-sm leading-[22px] tracking-normal text-[#000000]">{title}</Text>
            </View>
            <View className="pt-5">
                <Text className="text-[#3A7DFF] font-[SF Pro] text-sm font-semibold leading-[22px] tracking-normal">Celular: {celular}</Text>
                <Text className="text-[#3A7DFF] font-[SF Pro] text-sm font-semibold leading-[22px] tracking-normal">Endereço: {endereco}</Text>
                <Text className="text-[#3A7DFF] font-[SF Pro] text-sm font-semibold leading-[22px] tracking-normal">Bairro: {bairro}</Text>
                <Text className="text-[#3A7DFF] font-[SF Pro] text-sm font-semibold leading-[22px] tracking-normal">Cidade: {cidade}</Text>
                <Text className="text-[#3A7DFF] font-[SF Pro] text-sm font-semibold leading-[22px] tracking-normal">Estado: {estado}</Text>
            </View>
        </View>
    );
}