import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Firebase from '../config/Firebase'
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import firebase from 'firebase'
require('firebase/auth')

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginSuccess: false,
        }
    }
    handleEmail = (text) => {
      this.setState({ email: text })
   }
    handlePassword = (text) => {
      this.setState({ password: text })
   }
    handleLogin = () => {
        const { email, password } = this.state

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => { 
              console.log('login success')
              this.props.navigation.navigate('Homepage') 
            })
            .catch(error => console.log(error))
    }
    render() {
        let {email} = this.state
        let {password} = this.state        
        return (               
            <ImageBackground source={require('../images/LoginRegisBg.png')} style={styles.backgroundImage}>
                <View style={styles.loginCard}>
                    <Text style={styles.loginTitle}>Login</Text>
                    <View style={styles.loginForm}>
                        <FontAwesomeIcon style={styles.userIcon} icon={ faUser } />
                        <TextInput
                            style={styles.emailInput}
                            placeholder="email"
                            autoCapitalize='none'
                            onChangeText = {this.handleEmail}                        
                        />
                    </View>  
                    <View style={styles.loginForm}>
                        <FontAwesomeIcon style={styles.userIcon} icon={ faKey } />
                        <TextInput
                            style={styles.emailInput}
                            placeholder="password"
                            onChangeText = {this.handlePassword}   
                            secureTextEntry={true}                     
                        />
                    </View>  
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this.handleLogin}
                            title="Submit"
                            color="#fff"
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
    marginTop: 200,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',   
  },
  backgroundImage: {    
    flex: 1,
    width: null,
    height: null,    
    alignItems: 'center',
    justifyContent: 'flex-start',   
  }, 
  buttonContainer: {
    margin: 50,
    backgroundColor: '#EF7641',
    borderRadius: 20,
  },
  loginCard: {
    marginTop: 200,
  },
  loginForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  
    marginTop: 20, 
  },
  userIcon: {
    color: '#C4C5D2',
  },
  loginTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#414271',
    marginTop: 20,
    marginBottom: 20,
  },
  emailInput: {
      borderBottomWidth: 1,
      borderColor: '#414271',
      width: 250,
      fontSize: 20,
      marginLeft: 10,      
  }
});

export default Login;
