import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dadosJSON from '../data/pagamentosAbertos.json';
import PaymentsPay from "./PaymentsPay";

export default function PaymentOpenList() {
    const [listaDePagamentosAbertos, setListaDePagamentosAbertos] = useState([] as typeof dadosJSON);

    useEffect(() => {
        setListaDePagamentosAbertos(dadosJSON);
    }, []);

    return (
        <ScrollView>
            {listaDePagamentosAbertos.length === 0 ? (
                <View className="w-full flex items-center justify-center mb-5">
                    <Icon name="shield-check-outline" size={40} color="#3A7DFF" />
                    <Text className="text-lg font-semibold text-black mt-2">Nenhum registro</Text>
                    <Text className="text-sm text-gray-600 mt-1 mb-6">Não há nenhum pagamento aberto</Text>
                </View>
) : ( 
                <>
                    <View className="w-full flex items-center justify-center mb-5">
                        <Icon name="alert-circle-outline" size={40} color="#3A7DFF" />
                        <Text className="text-lg font-semibold text-black mt-2">Pagamentos em Aberto</Text>
                        <Text className="text-sm text-gray-600 mt-1 mb-6">Revise suas mensalidades pendentes</Text>
                    </View>

                    {listaDePagamentosAbertos.map((pagamento, index) => (
                    <View key={index} className="mb-4">
                        <PaymentsPay
                            title={`Mensalidade Ref: ${pagamento.mes}`}
                            vencimento={pagamento.dataVenc}
                            valor={pagamento.valor}
                        />
                    </View>
                ))}
                </> 
            )} 
        </ScrollView>
    );
}