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

  state = {
    total: 0,
  };

  Up = (item) => {
    this.setState({ total: Number(this.state.total) + Number(item.price) });
  }

  Add = (cart, item) => {
    cart.addOnceItem(item);
  }

  Remove = (cart, item) => {
    cart.removeOnceItem(item);
    this.setState({ total: Number(this.state.total) - (Number(item.price)*2) });
  }

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
                      <TouchableOpacity style={{ marginLeft: 5, marginRight: 5 }} onPress={() => this.Remove(cart, item)}>
                        <Icon.Ionicons
                          name={'ios-remove-circle-outline'}
                          size={26}
                          style={{ marginBottom: 0 }}
                          color={Colors.tabIconDefault}
                        />
                      </TouchableOpacity>
                      <Text style={styles.numberText}>{item.quantity}</Text>
                      <TouchableOpacity style={{ marginLeft: 5, marginRight: 5 }} onPress={() => this.Add(cart, item) }>
                        <Icon.Ionicons
                          name={'ios-add-circle-outline'}
                          size={26}
                          style={{ marginBottom: 0 }}
                          color={Colors.tabIconDefault}
                        />
                      </TouchableOpacity>
                      <Text style={styles.nameText}>{item.name}</Text>
                      <Text style={styles.priceText}>
                        ${item.price}/u
                        {this.Up(item)}
                      </Text>
                    </View>
                  }
                />;
                return (
                  <View>
                    <View style={styles.items}>
                      {Items}
                    </View>
                    <View style={styles.rowTotal}>
                      <Text style={styles.rowTotalText}>Total</Text>
                      <Text style={styles.rowTotalNumber}>{this.state.total}</Text>
                    </View>
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
    width: 75,
    height: 75,
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  nameText: {
    fontSize: 15,
    marginLeft: 10,
    width: 80,
  },
  priceText: {
    position: 'absolute',
    right: 5,
    fontSize: 15,
  },
  numberText: {
    fontSize: 20,
    marginRight: 5,
    marginLeft: 5,
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
  rowTotal: {
    marginTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  rowTotalText: {
    fontSize: 35,
  },
  rowTotalNumber: {
    fontSize: 20,
  },
  empty: {
    marginTop: 30,
    fontSize: 30,
  }
});