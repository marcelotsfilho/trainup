import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function OpenPayments(){
    return(
        <View className="items-center mt-32">
            <Icon name="shield-usd-outline" size={60} color="#3A7DFF" />
            <Text className="text-lg font-semibold text-[#3A7DFF] mt-4">Nenhum registro</Text>
            <Text className="text-lg text-[#000000] mt-1">Não há nenhum pagamento em aberto</Text>
        </View>
    );
}