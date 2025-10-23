import PaymentsPaid from '@/src/components/PaymentsPaid';
import Constants from "expo-constants";
import React from "react";
import { View } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

export default function Payment(){
    return(
        <View className="flex-1 items-center bg-[#E5EAF2]">
            <View className="w-full h-40 bg-[#3A7DFF]">
                <View
                    className="flex-row items-center ml-8 "
                    style={{marginTop: statusBarHeight+10}}
                >
                </View>
            </View>
            <PaymentsPaid title='Histórico de Pagamento' vencimento={''} valor={''}/>
        </View>
    );
}