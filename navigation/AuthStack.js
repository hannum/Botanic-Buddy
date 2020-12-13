import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';


import OnboardingScreen from '../screens/OnboardingScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();


const AuthStack = () => {

    const [isFirstLauch, setIsFirstLaunch] = React.useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
        if(value == null) {
            AsyncStorage.setItem('alreadyLauched', 'true');
            setIsFirstLaunch(true);
        } else {
            setIsFirstLaunch(false);
        }
        })
    }, [])

    if(isFirstLauch === null) {
        return null;
    } else if (isFirstLauch === true) {
        routeName = 'Onboarding'
    } else {
        routeName = 'Login';
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = {routeName}>
                <Stack.Screen 
                    name="Onboarding" 
                    component={OnboardingScreen} 
                    options={{header: () => null}}  
                />
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                    options={{header: () => null}} />
                <Stack.Screen 
                    name="Signup" 
                    component={SignupScreen} 
                    options={{header: () => null}}
                />

            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AuthStack;
