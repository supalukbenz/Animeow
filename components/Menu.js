import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, SafeAreaView, ImageBackground } from 'react-native';

class MenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginSuccess: false,
        }
    }
    handleUsername = (text) => {
      this.setState({ username: text })
   }
    handlePassword = (text) => {
      this.setState({ password: text })
   }
    render() {
        let {username} = this.state
        let {password} = this.state        
        return (               
            <ImageBackground source={require('../images/FirstPageBg.png')} style={styles.backgroundImage}>            
                <View style={styles.menuCard}>                  
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => this.props.navigation.navigate("Login")}
                            title="Login"
                            color="#fff"                            
                            style={styles.button}

                        />
                    </View>
                    <View style={styles.buttonRegisContainer}>
                        <Button
                            onPress={() => this.props.navigation.navigate("Register")}
                            title="Register"
                            color="#EF7641"                            
                            style={styles.button}
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  container: {    
    // backgroundColor: '#fff',   
    // marginTop: 200,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center', 
    flex: 1,  
  },
  backgroundImage: {    
    flex: 1,
    width: null,
    height: null,    
    alignItems: 'center',
    justifyContent: 'flex-start',   
  }, 
  buttonContainer: {
    marginTop: 20,
    width: 300,
    backgroundColor: '#EF7641',
    borderRadius: 10,
    padding: 5,
  },
  buttonRegisContainer: {
    marginTop: 20,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EF7641',
    padding: 5,
  },
  menuCard: {
    marginTop: 500,
  },
});

export default MenuPage;
