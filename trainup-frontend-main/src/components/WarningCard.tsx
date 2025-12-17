import { ActivityIndicator, Text, View } from "react-native";
import { usePayments } from "../context/PaymentContext";
import StatusButton from "./StatusButton";

export default function WarnmingCard() {
  const { payments, loading } = usePayments();
  const openPayments = payments.filter((p) => p.status === "aberto");

  if (loading) {
    return (
      <View className="w-96 h-72 bg-white rounded-3xl items-center justify-center">
        <ActivityIndicator size="large" color="#3A7DFF" />
      </View>
    );
  }

  if (openPayments.length === 0) {
    return null;
  }

  return (
    <View className="w-96 h-72 bg-white rounded-3xl ">
      <Text className="pt-8 pl-10 font-semibold text-lg">Avisos:</Text>
      {openPayments.map((payment) => (
        <View key={payment._id} className="pl-14 pt-5 flex-row items-center">
          <StatusButton />
          <Text className="pl-5 font-semibold text-lg">
            Mensalidade {payment.mes} em aberto
          </Text>
        </View>
      ))}
    </View>
  );
}
