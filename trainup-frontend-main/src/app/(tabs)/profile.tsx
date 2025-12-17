import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import AdditionalData from "@/src/components/AdditionalData";
import ProfileHeader from "@/src/components/ProfileHeader";
import RegistrationData from "@/src/components/RegistrationData";
import Training from "@/src/components/Training";

import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, signOut } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <View className="flex-1 bg-gray-100">
      <ProfileHeader
        //Garantem que a title e a matricula sempre recebam um valor de string válido.
        title={user.nome || ""}
        matricula={user.matricula || user._id || ""}
        fotoPerfil={user.fotoPerfil}
      />
      <View className="flex-1">
        <ScrollView>
          <View className="pt-16 px-0 mt-4 items-center">
            <RegistrationData
              title="Dados Cadastrais"
              cpf={user.cpf || "Não informado"}
              dataNascimento={user.dataNascimento || "Não informado"}
            />
            <View className="mt-4">
              <AdditionalData
                title="Dados Adicionais"
                celular={user.celular || ""}
                endereco={user.endereco || ""}
                bairro={user.bairro || ""}
                cidade={user.cidade || ""}
                estado={user.estado || ""}
              />
            </View>
            <Pressable
              className="mt-8 mb-8 bg-red-500 px-8 py-3 rounded-full"
              onPress={signOut}
            >
              <Text className="text-white font-bold">Sair</Text>
            </Pressable>
          </View>
        </ScrollView>
        <View className="absolute top-0 w-full items-center">
          <View className="-mt-[255px] left-[26%] absolute">
            <Training percentual={user.percentual || 0} />
          </View>
        </View>
      </View>
    </View>
  );
}
