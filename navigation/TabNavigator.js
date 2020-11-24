import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'
import DiaryScreen from '../screens/DiaryScreen'
import ShopScreen from '../screens/ShopScreen'
import MyPlantDetailScreen from '../screens/MyPlantDetailScreen'
import ProfileScreen from '../screens/ProfileScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Colors from '../utils/Colors'
import SocialPlantDetailScreen from '../screens/SocialPlantDetailScreen';




const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();


const TabNavigator = () => {
    return (
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    activeTintColor: Colors.Green,
                    inactiveTintColor: Colors.LightGray
                }}
            >
                <Tab.Screen
                    name="Diary"
                    component={DiaryScreen}
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome name="pencil" size={28} color={color} />
                    }}
                />
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome name="home" size={32} color={color} />
                    }}
                />
                
                <Tab.Screen
                    name="Shop"
                    component={ShopScreen}
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={24} color={color} />
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />
                    }}
                />
            </Tab.Navigator>   
    )
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='TabNavigator' component={TabNavigator} options={{header: () => null}}  />
                <Stack.Screen name='Profile' component={ProfileScreen} options={{header: () => null}}  />
                <Stack.Screen name='PlantDetail' component={MyPlantDetailScreen} options={{header: () => null}}  />
                <Stack.Screen name='SocialPlantDetail' component={SocialPlantDetailScreen} options={{header: () => null}}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator