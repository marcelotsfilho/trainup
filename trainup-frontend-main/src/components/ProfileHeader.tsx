import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProfileHeader({
  title,
  matricula,
  fotoPerfil,
}: {
  title: string;
  matricula: string;
  fotoPerfil?: string;
}) {
  return (
    <View className="w-full bg-[#3A7DFF] pt-16 pb-12 items-center">
      <View className="w-[70px] h-[70px] rounded-full bg-white items-center justify-center overflow-hidden">
        {fotoPerfil ? (
          <Image
            source={{ uri: fotoPerfil }}
            className="w-full h-full"
            resizeMode="cover"
          />
        ) : (
          <Icon name="account" size={40} color="#3A7DFF" />
        )}
      </View>
      <Text className="font-[SF Pro] font-semibold text-lg leading-[22px] tracking-normal text-[#FFFFFF] mt-8">
        {title}
      </Text>
      <Text className="font-[SF Pro] font-semibold text-base leading-[22px] tracking-normal text-[#FFFFFF] text-center">
        Matrícula: {matricula}
      </Text>
    </View>
  );
}
