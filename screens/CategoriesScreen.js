import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

import WooApi from '../constants/Api';

export default class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Brands',
  };

  state = {
    categories: []
  }

  fetProducts = () => {
    const url = `${WooApi.url.wc}products/categories?per_page=20&consumer_key=${WooApi.keys.consumerKey}&consumer_secret=${WooApi.keys.consumerSecret}`;
    axios.get(url)
    .then(response => this.setState({ categories: response.data }))
    .catch(error => console.log('error',error));
  }
  
  componentWillMount() {
    this.fetProducts();
  }

  renderItem = ({item}) => (
    <TouchableOpacity 
      style={styles.listItem} 
      onPress={() => this.props.navigation.navigate("Products", { categories: item.id })}
    >
      <View style={styles.view}>
        <Image style={styles.image} source={{uri: item.image.src}} />
       </View>
    </TouchableOpacity>
  )

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.state.categories.length ?
          <FlatList
            contentContainerStyle={styles.list} 
            numColumns={2}
            data={this.state.categories}
            keyExtractor={ item => item.id.toString() }
            renderItem={this.renderItem}
          />
          :
          <View style={styles.loaderContainer}>
            <Image
              source={ require('../assets/images/cart-loading.gif') }
              style={styles.loaderImage}
            />
          </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f6f6f6',
  },
  list: {
    flexDirection: 'column'
  },
  listItem: {
    width: '50%'
  },
  view: {
    padding: 10
  },
  image: {
    width: 150, 
    height: 150,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    padding: 5
  },
  loaderContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  loaderImage: {
    width: 200,
    height: 200,
  },
});
