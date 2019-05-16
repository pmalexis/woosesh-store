import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import { Dimensions } from "react-native";
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
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

          <ScrollView
            horizontal
            pagingEnabled
            style={{ marginTop: 30, marginBottom: 10 }}
          >
            <Image source={ require('../assets/images/photo-1.png') } style={styles.sliderImage} />
            <Image source={ require('../assets/images/photo-2.png') } style={styles.sliderImage} />
            <Image source={ require('../assets/images/photo-3.png') } style={styles.sliderImage} />
          </ScrollView>
        </ScrollView>

        <View style={styles.contentObject}>
          <Image
            source={
              require('../assets/images/obj-1.png')
            }
            style={styles.object}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  containerSV: {
    position: 'relative',
    zIndex: 1,
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
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
  helpLink: {
    paddingVertical: 15,
  },
  sliderImage: {
    height: 420,
    width: 360,
    resizeMode: 'contain',
  },
  contentObject: {
    position: 'absolute',
    zIndex: 0,
    right: 0,
    bottom: -75,
  },
  object : {
    height: height,
    width: width,
    resizeMode: 'contain',
  },
});
