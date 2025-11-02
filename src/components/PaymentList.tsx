import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dadosJSON from '../data/pagamentosPagos.json';
import PaymentsPay from './PaymentsPay';

export default function PaymentList() {
    const [listaDePagos, setListaDePagos] = useState([] as typeof dadosJSON);

    useEffect(() => {
        setListaDePagos(dadosJSON);
    }, []);

    return (
        <ScrollView>
            {listaDePagos.length === 0 ? (
                <View className="w-full flex items-center justify-center mb-5">
                    <Icon name="shield-check-outline" size={40} color="#3A7DFF" />
                    <Text className="text-lg font-semibold text-black mt-2">Nenhum registro</Text>
                    <Text className="text-sm text-gray-600 mt-1 mb-6">Não há nenhuma mensalidade paga</Text>
                </View>
            ) : (
                <>
                    <View className="w-full flex items-center justify-center mb-5">
                        <Icon name="shield-check-outline" size={40} color="#3A7DFF" />
                        <Text className="text-lg font-semibold text-black mt-2">Histórico de Pagamentos</Text>
                        <Text className="text-sm text-gray-600 mt-1 mb-6">Acompanhe o histórico dos últimos 12 pagamentos</Text>
                    </View>
                    {listaDePagos.map((pagamento, index) => (
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