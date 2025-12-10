import { Text, View } from "react-native";
import StatusButton from "./StatusButton";

export default function WarnmingCard(){
    return(
        <View className="w-96 h-72 bg-white rounded-3xl ">
            <Text className="pt-8 pl-10 font-semibold text-lg">Avisos:</Text>
            <View className="pl-14 pt-5 flex-row items-center">
                <StatusButton />
                <Text className="pl-5 font-semibold text-lg">Pagamento em débito</Text>
            </View>
            <View className="pl-14 pt-5 flex-row items-center">
                <StatusButton />
                <Text className="pl-5 font-semibold text-lg">Pagamento em débito</Text>
            </View>
            <View className="pl-14 pt-5 flex-row items-center">
                <StatusButton />
                <Text className="pl-5 font-semibold text-lg">Pagamento em débito</Text>
            </View>
            <View className="pl-14 pt-5 flex-row items-center">
                <StatusButton />
                <Text className="pl-5 font-semibold text-lg">Pagamento em débito</Text>
            </View>
        </View>
    );
}