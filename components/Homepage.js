import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import OngoingAnime from './OngoingAnime.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, SafeAreaView, ImageBackground, ScrollView } from 'react-native';

const Tab = createBottomTabNavigator();

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: false,
        }
    }
    render() {
        let {items} = this.state
        let {loading} = this.state
        return (               
            <ImageBackground source={require('../images/AnimeTrendingBg.png')} style={styles.backgroundImage}>                
                <ScrollView style={styles.contentContainer}>        
                    <TouchableOpacity style={styles.trendingCard} onPress={() => this.props.navigation.navigate("RatingAnimeList")}>
                        <ImageBackground source={require('../images/anime_kimetsu.jpeg')} style={styles.trendingCard}>
                            <View style={styles.trendingDetail}>
                                <Text style={styles.trendingTitle}>Anime Trending</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                
                    <View style={styles.ongoingView}><OngoingAnime></OngoingAnime></View>                    
                </ScrollView>
            </ImageBackground>
            
        );
    }
}

const styles = StyleSheet.create({
  container: {     
    flex: 1,
  },
  backgroundImage: {    
    flex: 1,
    width: null,
    height: null,        
    justifyContent: 'center',    
    alignItems: 'center'
  }, 
  contentContainer: {
      flex: 1,
      width: '100%'
  },
  tabFooter: {
    height: 500,    
    justifyContent: 'center', 
  },
  cardBanner: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  trendingCard: {
    width: "100%",
    height: 200,  
    marginTop: 200,  
    alignItems: 'center',
    justifyContent: 'flex-end',   
  },
  trendingDetail: {
    backgroundColor: 'rgba(255, 255, 255, 0.72)',
    width: '100%',   
    padding: 10,
    alignItems: 'flex-end',
     
  },
  ongoingView: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 100,
  },
  trendingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Homepage;
