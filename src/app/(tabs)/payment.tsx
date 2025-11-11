//Prepara um navegador de abas que fica no topo
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from "expo-constants";
import React from "react";
import { Text, View } from 'react-native';

import AllPaymentsList from '@/src/components/AllPaymentsList';
import PaymentList from '@/src/components/PaymentList';
import PaymentOpenList from '@/src/components/PaymentOpenList';

const Tab = createMaterialTopTabNavigator();

const statusBarHeight = Constants.statusBarHeight;
const HEADER_HEIGHT = 108 + statusBarHeight;

export default function Payment() {
    return (
        <View 
            style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
            <Tab.Navigator
                screenOptions={{
                    //Linha que desliza embaixo do nome da aba
                    tabBarIndicatorStyle: { backgroundColor: '#3a7dff' },
                    //<Text> para cada rótulo de aba.
                    tabBarLabel: ({ focused, children }) => (
                        <Text style={{
                            fontWeight: 'bold',
                            borderTopLeftRadius: children === 'Abertos' ? 15 : 0,
                            borderTopRightRadius: children === 'Todos' ? 15 : 0,
                            borderBottomLeftRadius: children === 'Abertos' ? 15 : 0,
                            borderBottomRightRadius: children === 'Todos' ? 15 : 0,
                            fontSize: 14,
                            margin: 0,
                            paddingHorizontal: 25,
                            paddingVertical: 15,
                            minWidth: 105,
                            maxWidth: 105,
                            textAlign: 'center',
                            backgroundColor: focused ? '#FFFFFF' : '#6faeff',
                            color: '#000',
                        }}>
                            {children}
                        </Text>
                    ),
                    //Estilo da barra de abas (fundo)
                    tabBarStyle: {
                        position: 'absolute',
                        padding: 0,
                        height: HEADER_HEIGHT,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#3a7dff',
                        width: "100%",
                    },
                    tabBarItemStyle: {
                        width: 'auto',
                        padding: 0,
                        margin: 0,
                        marginTop: 50,
                    },
                    //Exibido abaixo da barra de abas.
                    sceneStyle: { marginTop: HEADER_HEIGHT, paddingTop: statusBarHeight },
                }}
            >
                <Tab.Screen name="Abertos" component={PaymentOpenList} />
                <Tab.Screen name="Pagos" component={PaymentList} />
                <Tab.Screen name="Todos" component={AllPaymentsList} />
            </Tab.Navigator>
        </View>
    );
}