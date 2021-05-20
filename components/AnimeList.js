import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import axios from 'axios';

class AnimeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
        }
    }

    componentDidMount() {
        this.fetchCats();
    }

    async fetchCats() {
        this.setState({ refreshing: true });
        const res = await axios.get('https://kitsu.io/api/edge/trending/anime');        
        const data = await res.data.data;        
        this.setState({ data: data })
        this.setState({ refreshing: false });
    }

    renderItemComponent = (data) =>
        <TouchableOpacity style={styles.card}>
            <Image
                style={styles.cardImage}
                source={{uri: 'https://cdn.animenewsnetwork.com/hotlink/thumbnails/fit650x650/cms/news.3/154180/kv-tv1r.png.jpg'}}
                resizeMode={'cover'} // cover or contain its upto you view look
            />
            <Text style={styles.cardText}>Re zero</Text>
        </TouchableOpacity> 

    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginLeft: 10,
        marginRight: 10,
    }}
    />

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
    }

    render() {
      return (
        <SafeAreaView>          
          <FlatList
            data={this.state.data}
            renderItem={item => this.renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.ItemSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        </SafeAreaView>)
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',   
    marginTop: 100,
    flex: 1,
  },
  image: {
    height: '100%',
    borderRadius: 4,
  },
  cardText: {
      fontSize: 30,
      padding: 10
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '100%',
    borderWidth: 1,
    borderColor: "#C4C5D2",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
      
  },
  cardImage: {
      width: 200,
      height: 200,      
  }
});

export default AnimeList;