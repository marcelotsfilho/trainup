import React from "react";
import { Link } from "expo-router";
import { View, Text,TextInput, Image, Pressable } from "react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Login(){
    const [text, onChangeText] = React.useState('');
    return(
        <View 
            className="flex-1 items-center bg-white"
            style={{marginTop: statusBarHeight+10}}
        >
            <View className="mt-20">
                <Image
                    className="w-72 h-72"
                    source={require('../../assets/images/logo-azul.png')}
                />
            </View>
            <View className="mx-16 bg-red">
                <TextInput
                    className="h-14 w-[320px] border border-[#3A7DFF] rounded-xl px-3 mt-10"
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Login"
                    keyboardType="email-address"
                />
                <TextInput
                    className="h-14 w-[320px] border border-[#3A7DFF] rounded-xl px-3 mt-5"
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Senha"
                    keyboardType="email-address"
                />
            </View>
            <View className="mt-20">
                {/* TODO: Alterar a rota */}
                <Link href="/" asChild>
                    <Pressable className="h-16 w-60 items-center justify-center mt-8 px-4 py-2 bg-blue-500 rounded-full ">
                        <Text className="text-white text-xl">ENTRAR</Text>
                    </Pressable>
                </Link>
            </View>
            <View className="mt-10">
                {/* TODO: Alterar a rota */}
                <Link href="/" asChild>
                    <Pressable>
                        <Text className="text-[#3A7DFF] text-lg">Esqueci minha senha</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}