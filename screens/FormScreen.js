import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View, 
  TextInput, TouchableOpacity

} from 'react-native';


export default class FormScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/blanc.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.title}>Log in or sign up for free</Text>
          
         
          
       <TouchableOpacity
         style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>
         <Text style={styles.boutoncouleur}> Log in </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.button} onPress={() => this.props.navigation.navigate("Signup")}>
         <Text style={styles.boutoncouleur}> Sign up </Text>
       </TouchableOpacity>
          </View>

          
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F1F6D',
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
    color: '#000000',
    opacity: 0.5,
    marginBottom: 10,
    marginTop: 10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    marginTop: 40,
    
  },
  getStartedContainer: {
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
    marginTop: 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  helpLink: {
    paddingVertical: 15,
  },
 
  button: {
    backgroundColor: '#5F1F6D',
    width: 350,
    height: 50,
    marginTop: 10,
  },
  boutoncouleur: {
    color: "#ffffff",
    textAlign: 'center',
    marginTop: 15,
    fontSize: 18,

  },
  buttonfacebook: {
    backgroundColor: '#3b5998',
    width: 350,
    height: 50,
    marginTop: 10,
  }

});
