import Constants from "expo-constants";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

export default function Login(){
    // estados(hooks) para armazenar os valores 
    const [user, onChangeUser] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    // implementação do async storage
    const storeData = async (value: string) => {
        try{

        }catch(error){
            console.error('Erro ao salvar os dados de perfil', error);
        }
    }

    return(
        <View 
            className="flex-1 items-center bg-white"
            style={{marginTop: statusBarHeight+10}}
        >
            <View className="mt-20">
                <Image
                    className="w-72 h-72"
                    source={require('../../../assets/images/logo-azul.png')}
                />
            </View>
            <View className="mx-16 mt-10">
                <TextInput
                    className="h-14 w-[320px] border border-[#3A7DFF] rounded-xl px-3 mt-10"
                    onChangeText={onChangeUser}
                    value={user}
                    placeholder="Login"
                    keyboardType="email-address"
                />
                <TextInput
                    className="h-14 w-[320px] border border-[#3A7DFF] rounded-xl px-3 mt-5"
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Senha"
                    keyboardType="email-address"
                />
            </View>
            <View className="mt-28">
                {/* TODO: Alterar a rota */}
                <Link href="/(tabs)/home" asChild>
                    <Pressable className="h-16 w-60 items-center justify-center mt-8 px-4 py-2 bg-blue-500 rounded-full ">
                        <Text className="text-white text-xl">ENTRAR</Text>
                    </Pressable>
                </Link>
            </View>
            <View className="mt-10">
                {/* rota para caso deseja visualizar tela de carregamento */}
                <Link href="/" asChild>
                    <Pressable>
                        <Text className="text-[#3A7DFF] text-lg">Voltar tela de carregamento</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}