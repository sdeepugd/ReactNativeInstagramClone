import { Text, View } from 'react-native'

import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import {NavigationContainer} from '@react-navigation/native'
import NewPostScreen from './NewPostScreen';
import React from 'react'
import SignUpScreen from './SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const screenOptions = {
    headerShown:false
}

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOptions}>
                <Stack.Screen name='HomeScreen' component ={HomeScreen} />
                <Stack.Screen name='NewPostScreen' component ={NewPostScreen} />
                <Stack.Screen name='LoginScreen' component ={LoginScreen} />
                <Stack.Screen name='SignUpScreen' component ={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignedInStack 
 