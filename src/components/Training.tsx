import { Text, View } from "react-native";

export default function Training({
    title
}:{
    title: string
}){
    return(
        <View className="w-[200px] h-[78px] bg-white rounded-[20px] px-4 shadow-lg absolute top-[220px] left-1/4">
            <Text className="font-[SF Pro] font-semibold text-lg leading-[22px] tracking-normal text-[#3A7DFF] text-center pt-5">23%</Text>
            <Text className="font-[SF Pro] font-semibold text-xs leading-[22px] tracking-normal text-[#000000] text-center">{title}</Text>
        </View>
    );
}