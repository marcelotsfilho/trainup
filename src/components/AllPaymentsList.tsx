import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import dadosAbertos from '../data/pagamentosAbertos.json';
import dadosPagos from '../data/pagamentosPagos.json';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PaymentsPay from './PaymentsPay';

export default function AllPaymentsList() {
    const [listaTodosPagamentos, setlistaTodosPagamentos] = useState([] as typeof dadosAbertos);

    useEffect(() => {
        const listaCombinada = [...dadosAbertos, ...dadosPagos];
        setlistaTodosPagamentos(listaCombinada);
    }, []);

    return (
        <ScrollView>
            {listaTodosPagamentos.length === 0 ? (
            <View className="w-full flex items-center justify-center mb-5">
                <Icon name="shield-check-outline" size={40} color="#3A7DFF" />
                <Text className="text-lg font-semibold text-black mt-2">Nenhum registro</Text>
                <Text className="text-sm text-gray-600 mt-1 mb-6">Ainda não há pagamentos para mostrar</Text>
            </View>
            ) : (
            <>

            <View className="w-full flex items-center justify-center mb-5">
                <Icon name="shield-check-outline" size={40} color="#3A7DFF" />
                <Text className="text-lg font-semibold text-black mt-2">Histórico Completo</Text>
                <Text className="text-sm text-gray-600 mt-1 mb-6">Todos os pagamentos, pagos e em aberto</Text>
            </View>

            {listaTodosPagamentos.map((pagamento) => (
                <View key={pagamento.id} className="mb-4">
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