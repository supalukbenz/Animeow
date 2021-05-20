import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Firebase from '../config/Firebase'
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import firebase from 'firebase'
require('firebase/auth')

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMsg: '',
            confirmPassword: '',
            loginSuccess: false,
        }
    }
    handleUsername = (text) => {
      this.setState({ username: text })
   }
    handlePassword = (text) => {
      this.setState({ password: text })
   }
    handleRePassword = (text) => {
      this.setState({ confirmPassword: text })
   }
    handleSignUp = () => {
      const { username, password } = this.state
      console.log('username', username);
    
      firebase.auth()
          .createUserWithEmailAndPassword(username, password)
          .then(() => { 
            console.log('login');
            this.props.navigation.navigate('Login') 
          })
          .catch(error => {
            console.log(error)
            this.setState({ errorMsg: error })
          })
    }

    render() {
        let {username, password, errorMsg} = this.state
     
        return (               
            <ImageBackground source={require('../images/LoginRegisBg.png')} style={styles.backgroundImage}>
                <View style={styles.loginCard}>
                    <Text style={styles.registerTitle}>Register</Text>
                    <View style={styles.registerForm}>
                        <FontAwesomeIcon style={styles.userIcon} icon={ faUser } />
                        <TextInput
                            style={styles.usernameInput}
                            placeholder="username"
                            autoCapitalize='none'
                            onChangeText = {this.handleUsername}                        
                        />
                    </View>  
                    <View style={styles.registerForm}>
                        <FontAwesomeIcon style={styles.userIcon} icon={ faKey } />
                        <TextInput
                            style={styles.usernameInput}
                            placeholder="password"
                            onChangeText = {this.handlePassword}   
                            secureTextEntry={true}                     
                        />
                    </View>  
                    <View style={styles.registerForm}>
                        <FontAwesomeIcon style={styles.userIcon} icon={ faKey } />
                        <TextInput
                            style={styles.usernameInput}
                            placeholder="confirm password"
                            onChangeText = {this.handleRePassword}   
                            secureTextEntry={true}                     
                        />
                    </View>  
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this.handleSignUp}
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
  registerForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  
    marginTop: 20, 
  },
  userIcon: {
    color: '#C4C5D2',
  },
  registerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#414271',
    marginTop: 20,
    marginBottom: 20,
  },
  usernameInput: {
      borderBottomWidth: 1,
      borderColor: '#414271',
      width: 250,
      fontSize: 20,
      marginLeft: 10,      
  }
});

export default Register;
