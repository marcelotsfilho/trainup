import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { dadosPagamentosPagos, PagamentosPagos } from '../data/pagamentosPagos';
import PaymentsPay from './PaymentsPay';

export default function PaymentList() {
    const [listaDePagos, setListaDePagos] = useState([] as PagamentosPagos[]);

    useEffect(() => {
        setListaDePagos(dadosPagamentosPagos);
    }, []);

    return (
        <ScrollView>
            {listaDePagos.length === 0 ? (
                <View className="w-full flex items-center justify-center mb-5">
                    <Icon name="check-circle-outline" size={40} color="#3A7DFF" />
                    <Text className="text-lg font-semibold text-black mt-2">Nenhum registro</Text>
                    <Text className="text-sm text-gray-600 mt-1 mb-6">Não há nenhuma mensalidade paga</Text>
                </View>
            ) : (
                <>
                    <View className="w-full flex items-center justify-center mb-5">
                        <Icon name="check-circle-outline" size={40} color="#3A7DFF" />
                        <Text className="text-lg font-semibold text-black mt-2">Histórico de Pagamentos</Text>
                        <Text className="text-sm text-gray-600 mt-1 mb-6">Acompanhe o histórico dos últimos 12 pagamentos</Text>
                    </View>
                    {listaDePagos.map((pagamento, index) => (
                        <View key={index} className="mb-4">
                            <PaymentsPay
                                title={`Mensalidade Ref: ${pagamento.mes}`}
                                vencimento={pagamento.dataVenc}
                                valor={pagamento.valor}
                                color="#1ED760"
                            />
                        </View>
                    ))}
                </>
            )}
        </ScrollView>
    );
}