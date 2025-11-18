import React from "react";
import { Link, useRouter } from "expo-router";
import { View, Text,TextInput, Image, Pressable, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // para salvar informações de login futuramente
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

const USUARIO_TESTE = "admin";
const SENHA_TESTE = "admin123";

export default function Login(){
    // inicialização do router
    const router = useRouter();
    // estados(hooks) para armazenar os valores 
    const [user, onChangeUser] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    // implementação do async storage para salvar os dados do usuario (quando implementar o backend)
    const storeData = async (value: string) => {
        try{

        }catch(error){
            console.error('Erro ao salvar os dados de perfil', error);
        }
    }
    // login estatico para demonstracao
    const hendleLogin = () => {
        if(user === USUARIO_TESTE && password === SENHA_TESTE){
            Alert.alert("Login realizado com sucesso!");
            router.replace("/(tabs)/home");
        }else{
            Alert.alert("Usuário ou senha incorretos.")
        }
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                        placeholderTextColor={"#000"}
                        keyboardType="email-address"
                    />
                    <TextInput
                        className="h-14 w-[320px] border border-[#3A7DFF] rounded-xl px-3 mt-5"
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="Senha"
                        placeholderTextColor={"#000"}
                        secureTextEntry={true}
                    />
                </View>
                <View className="mt-28">
                    <Pressable 
                        className="h-16 w-60 items-center justify-center mt-8 px-4 py-2 bg-blue-500 rounded-full "
                        onPress={hendleLogin}    
                    >
                        <Text className="text-white text-xl">ENTRAR</Text>
                    </Pressable>
                </View>
                <View className="mt-10">
                    {/* rota temporaria para caso deseja visualizar tela de carregamento */}
                    <Link href="/" asChild>
                        <Pressable>
                            <Text className="text-[#3A7DFF] text-lg">Voltar tela de carregamento</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}