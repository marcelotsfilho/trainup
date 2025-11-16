import { Text, View } from "react-native";

export default function PaymentsPay({
    title,
    vencimento,
    valor,
    color,
}: {
    title: string;
    vencimento: string;
    valor: string;
    color: string;
}
) {
    return (
        <View className="w-[328px] h-[90px] bg-white rounded-[10px] flex-row items-center px-4 mx-auto">
            <View className={"w-5 h-5 rounded-full"}
                style={{ backgroundColor: color }}
            />
            <View className="ml-4">
                <Text className="text-[#000000] font-[SF Pro] text-base font-semibold leading-[22px] tracking-normal">{title}</Text>
                <Text className="text-[#000000] font-[SF Pro] text-base font-semibold leading-[22px] tracking-normal">Vencimento: {vencimento}</Text>
                <Text className="text-[#000000] font-[SF Pro] text-base font-semibold leading-[22px] tracking-normal">Valor: R$ {valor}</Text>
            </View>
        </View>
    );
}