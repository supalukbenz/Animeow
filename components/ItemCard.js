import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faKey, faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { StyleSheet, Text, ScrollView, View, Button, TextInput, Image, FlatList, SafeAreaView, ImageBackground } from 'react-native';

class ItemCard extends Component {
    render() {
        const { item } = this.props.route.params;
        return (               
            <ImageBackground source={require('../images/LoginRegisBg.png')} style={styles.backgroundImage}>
                <ScrollView style={styles.contentContainer}>        
                    <View style={styles.detailCard}>
                    <Text style={styles.title}>{ item.attributes.titles.en }</Text>
                        <Image
                            style={styles.cardImage}
                            source={{uri: item.attributes.posterImage.small }}
                            resizeMode={'cover'} // cover or contain its upto you view look
                        />       
                        <View style={styles.score}>
                            <FontAwesomeIcon style={styles.startIcon} icon={ faStar } /><Text style={styles.averageRating}>{ item.attributes.averageRating }</Text>
                        </View>             
                        <Text>Rate: { item.attributes.ageRating } ({ item.attributes.ageRatingGuide })</Text>
                        <View style={styles.status}>
                            <Text style={styles.episode}>
                                { item.attributes.subtype }
                                {item.attributes.episodeCount !== null ? <Text>({ item.attributes.episodeCount } eps)</Text>: null }
                            </Text>
                            <Text style={styles.episode}>
                                {item.attributes.status !== null ? <Text>status: { item.attributes.status }</Text>: null }
                            </Text>
                        </View>
                        <Text style={styles.description}>{ item.attributes.description }</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    detailCard: {
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10,
        margin: 20,
        marginTop: 170,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:  'center',   
    },
    contentContainer: {
      flex: 1,
      width: '100%'
      
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center',   
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10,
    },
    ranking: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    score: {      
        flexDirection: "row",     
    },
    cardImage: {
        width: 200,
        height: 200,     
    },
    description: {
        margin: 10,
    },
    status: {        
        width: "100%",        
        justifyContent: "flex-end",
        alignItems: "center",        
    },
    episode: {
        // color: '#767496',
    },
});

export default ItemCard;
