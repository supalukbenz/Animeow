import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RatingAnimeList from './components/RatingAnimeList.js'
import AnimeList from './components/AnimeList.js'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!dd</Text> */}
      <RatingAnimeList></RatingAnimeList>
      {/* <AnimeList></AnimeList> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',    
  },
});
