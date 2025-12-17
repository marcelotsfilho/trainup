import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { usePayments } from "../context/PaymentContext";
import PaymentsPay from "./PaymentsPay";

export default function AllPaymentsList() {
  const { payments, loading } = usePayments();

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center mt-10">
        <ActivityIndicator size="large" color="#3A7DFF" />
      </View>
    );
  }

  return (
    <ScrollView>
      {payments.length === 0 ? (
        <View className="w-full flex items-center justify-center mb-5">
          <Icon name="list-box-outline" size={40} color="#3A7DFF" />
          <Text className="text-lg font-semibold text-black mt-2">
            Nenhum registro
          </Text>
          <Text className="text-sm text-gray-600 mt-1 mb-6">
            Ainda não há pagamentos para mostrar
          </Text>
        </View>
      ) : (
        <>
          <View className="w-full flex items-center justify-center mb-5">
            <Icon name="list-box-outline" size={40} color="#3A7DFF" />
            <Text className="text-lg font-semibold text-black mt-2">
              Histórico Completo
            </Text>
            <Text className="text-sm text-gray-600 mt-1 mb-6">
              Todos os pagamentos, pagos e em aberto
            </Text>
          </View>

          {payments.map((pagamento) => (
            <View key={pagamento._id} className="mb-4">
              <PaymentsPay
                title={`Mensalidade Ref: ${pagamento.mes}`}
                vencimento={pagamento.dataVenc}
                valor={pagamento.valor}
                color={pagamento.status === "pago" ? "#1ED760" : "#FF4C4C"}
              />
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
}
