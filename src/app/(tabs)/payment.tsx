import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from "expo-constants";
import React from "react";
import { Text, View } from 'react-native';

import AllPaymentsList from '@/src/components/AllPaymentsList';
import PaymentList from '@/src/components/PaymentList';
import PaymentOpenList from '@/src/components/PaymentOpenList';

const Tab = createMaterialTopTabNavigator();

const statusBarHeight = Constants.statusBarHeight;
const HEADER_HEIGHT = 162;

export default function Payment() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: { backgroundColor: '#3a7dff' },
                    tabBarLabel: ({ focused, children }) => (
                        <Text style={{
                            fontWeight: 'bold',
                            borderRadius: 20,
                            margin: 0,
                            paddingHorizontal: 25,
                            paddingVertical: 10,
                            minWidth: 105,
                            maxWidth: 105,
                            textAlign: 'center',
                            backgroundColor: focused ? '#FFFFFF' : '#6faeff',
                            color: '#000',
                        }}>
                            {children}
                        </Text>
                    ),
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
                    sceneStyle: { marginTop: HEADER_HEIGHT, paddingTop: statusBarHeight }
                }}
            >
                <Tab.Screen name="Abertos" component={PaymentOpenList} />
                <Tab.Screen name="Pagos" component={PaymentList} />
                <Tab.Screen name="Todos" component={AllPaymentsList} />
            </Tab.Navigator>
        </View>
    );
}