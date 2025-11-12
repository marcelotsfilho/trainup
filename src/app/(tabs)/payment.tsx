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
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: { backgroundColor: '#3a7dff' },
                    tabBarLabel: ({ focused, children }) => (
                        <View
                            style={{
                                borderTopLeftRadius: children === 'Abertos' ? 15 : 0,
                                borderTopRightRadius: children === 'Todos' ? 15 : 0,
                                borderBottomLeftRadius: children === 'Abertos' ? 15 : 0,
                                borderBottomRightRadius: children === 'Todos' ? 15 : 0,
                                paddingHorizontal: 25,
                                paddingVertical: 15,
                                minWidth: 105,
                                maxWidth: 105,
                                backgroundColor: focused ? '#FFFFFF' : '#6faeff',
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    color: '#000',
                                }}
                            >
                                {children}
                            </Text>
                        </View>
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