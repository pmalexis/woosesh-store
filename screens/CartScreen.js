import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';
import { Entypo } from '@expo/vector-icons';

import { CartContext } from '../context/CartContext';

import { Dimensions } from "react-native";
let width = Dimensions.get('window').width;

export default class CartScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerSV} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/woosesh-logo.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.title}>My cart</Text>
          </View>

          <CartContext.Consumer>
            {cart => {
              if (cart.items && cart.items.length > 0) {
                const Items = <FlatList contentContainerStyle={styles.list}
                  data={cart.items}
                  keyExtractor={ item => item.id.toString() }
                  renderItem={({ item }) =>
                    <View style={styles.lineItem} >
                      <Image style={styles.image} source={{ uri: item.image }} />
                      <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }} onPress={() => cart.addOnceItem(item)}>
                        <Icon.Ionicons
                          name={'ios-add-circle-outline'}
                          size={26}
                          style={{ marginBottom: -10 }}
                          color={Colors.tabIconDefault}
                        />
                      </TouchableOpacity>
                      <Text style={styles.text}>{item.quantity}</Text>
                      <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }} onPress={() => cart.removeOnceItem(item)}>
                        <Icon.Ionicons
                          name={'ios-remove-circle-outline'}
                          size={26}
                          style={{ marginBottom: -10 }}
                          color={Colors.tabIconDefault}
                        />
                      </TouchableOpacity>
                      <Text style={styles.text}>{item.name}</Text>
                      <Text style={styles.text}>{item.quantity} x ${item.price}</Text>
                      <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => cart.removeItem(item)}><Entypo name="cross" size={30} /></TouchableOpacity>
                    </View>
                  }
                />;
                return (
                  <View style={styles.items}>
                    {Items}
                  </View>
                )
              } else {
                return (
                  <View style={styles.container}>
                    <Text style={styles.empty}>Cart is empty!</Text>
                  </View>
                )
              }
            }}
          </CartContext.Consumer>
        </ScrollView>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  lineItem: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  list: {
    flexDirection: 'column',
    width: width,
    paddingLeft: 15,
    paddingRight: 15,
  },
  image: {
    width: 100,
    height: 100
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  text: {
    fontSize: 20,
    padding: 5
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  getStartedContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 50,
  },
  empty: {
    marginTop: 30,
    fontSize: 30,
  }
});