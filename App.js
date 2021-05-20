import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RatingAnimeList from './components/RatingAnimeList.js'
import Homepage from './components/Homepage.js'
import Login from './components/Login.js'
import Menu from './components/Menu.js'
import OngoingAnime from './components/OngoingAnime.js'
import Register from './components/Register.js'
import ItemCard from './components/ItemCard'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

function App() {
  return (
    <View style={{flex: 1}}> 
      <NavigationContainer>
        <Stack.Navigator>          
          <Stack.Screen options={{headerShown: false}}  name="Menu" component={Menu} />
          <Stack.Screen options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#EF7641',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Login" component={Login} />
          <Stack.Screen 
          options={{
            title: 'Register',
            headerStyle: {
              backgroundColor: '#EF7641',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}          
           name="Register" component={Register} />
          <Stack.Screen 
            options={{
              title: 'Anime',
              headerStyle: {
                backgroundColor: '#EF7641',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}  
           name="ItemCard" component={ItemCard} />
          <Stack.Screen
            options={{
              title: 'Homepage',
              headerStyle: {
                backgroundColor: '#EF7641',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}  
           name="Homepage" component={Homepage} />
          <Stack.Screen name="OngoingAnime" component={OngoingAnime} />
          <Stack.Screen options={{
              title: 'Ranking',
              headerStyle: {
                backgroundColor: '#EF7641',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="RatingAnimeList" component={RatingAnimeList} />          
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;