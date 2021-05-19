import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';

class RatingAnimeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.getDataFromAPI();
    }

    getDataFromAPI = async () => {
        const res = await axios.get('https://kitsu.io/api/edge/trending/anime');        
        const data = await res.data.data;        
        this.setState({
            items: data
        })
    }
    _renderItem = ({item, index}) => {
        return (
             <TouchableOpacity style={styles.card}>
                <View style={styles.rankingView}><Text style={styles.ranking}>{index+1}</Text></View>
                <Text style={styles.title}>{ item.attributes.titles.en }</Text>
                <Text style={styles.year}>({ item.attributes.startDate.split("-")[0] })</Text>
                <Image
                    style={styles.cardImage}
                    source={{uri: item.attributes.posterImage.small }}
                    resizeMode={'cover'} // cover or contain its upto you view look
                />
                <View style={styles.score}>
                    <FontAwesomeIcon style={styles.startIcon} icon={ faStar } /><Text style={styles.averageRating}>{ item.attributes.averageRating }</Text>
                </View>
                <View style={styles.status}>
                    <Text style={styles.episode}>
                        { item.attributes.subtype }
                        {item.attributes.episodeCount !== null ? <Text>({ item.attributes.episodeCount } eps)</Text>: null }
                    </Text>
                    <Text style={styles.episode}>
                        {item.attributes.status !== null ? <Text>status: { item.attributes.status }</Text>: null }
                    </Text>
                </View>
            </TouchableOpacity> 
        )
    }
    render() {
        let {items} = this.state
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.ratingTitle}>Anime trending</Text>
                <FlatList                                        
                    data={items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#fff',   
    marginTop: 100,
    
  },
  rankingView: {
    width: 40,
    height: 40,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#EF7641',    
    justifyContent: 'center'
  },
  ranking: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  score: {    
    flex: 1,    
    flexDirection: "row",
    margin: 10,    
  },
  status: {
    flex: 1,    
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  startIcon: {
    color: '#FFEB38',
    marginRight: 5,
    marginLeft: -5,
  },
  averageRating: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  episode: {
    fontSize: 12,
    color: '#767496',
  },
  year: {
    fontSize: 14,  
    paddingBottom: 10,  
  },
  cardText: {
      fontSize: 15,
      padding: 10
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: 300,
    borderWidth: 1,
    borderColor: "#C4C5D2",
    borderRadius: 10,    
    padding: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
      
  },
  cardImage: {
      width: 200,
      height: 200,      
  }
});

export default RatingAnimeList;
