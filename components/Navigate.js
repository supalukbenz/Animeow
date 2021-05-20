import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login.js'
import Register from './Register.js'



const AppStack = createStackNavigator();
export default function Navigator(){

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: true }} >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Register" component={Register} />                
            </AppStack.Navigator>

        </NavigationContainer>
    );
}