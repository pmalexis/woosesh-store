import React from 'react';
import { Image, ScrollView, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

 
export default class ProfilScreen extends React.Component {
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
                require('../assets/images/woosesh-logo.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <Text style={styles.titleaccount}>My account</Text>
         
                <Image 
              source={
                require('../assets/images/photo.png')
              } 
              style={styles.retour}
               
            />
            <View style={styles.containerinformation}>
                <Text style={styles.titlenom}>Pauline Ayambo</Text>
                <Text style={styles.titlepage}>18/12/1997</Text>
                <Text style={styles.titleinscription}>Member since 15/05/2019</Text>
                <Text style={styles.titlemail}>pauline.ayambo@gmail.com</Text>
                <Text style={styles.titleedit}>Edit</Text>
            </View>

            <View style={styles.bordure}>
            </View>
            
          <View style={styles.getStartedContainer}>
            <Text style={styles.titlelogin}>Credit card informations</Text>  

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="1520-1518-1497-5617"
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyle}
 
        />
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="12/20"
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyle}
 
        />
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="568"
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyle}
 
        />
       
        <TouchableOpacity
         style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
         <Text style={styles.boutoncouleur}> Log out </Text>
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
    backgroundColor: '#ffffff',
    paddingBottom: 25,
  },
  containerinformation: {
    display: 'flex',
    position: 'absolute',
    left: 150,
    top: 180,

  },
  bordure: {
    backgroundColor: '#5F1F6D',
    height: 1,
    width: '80%',
    top: 50,
    left: '10%',
  },
  titleaccount: {
    left : 20,
    fontSize: 35,
    marginBottom: 25,
  },
  titleedit: {
    marginTop: 10,
    fontSize: 20,
    color: '#d6d7da',
  },
  titlepage: {
    color: '#d6d7da',
  },
    titleinscription: {
    color: '#d6d7da',
  },

  titlemail: {
    color: '#5F1F6D',
  },
  buttoncouleur: {
    color: '#ffffff',
  },
  titlelogin: {
    fontSize: 20,
    paddingBottom: 10,
    color: '#000000',
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
   width: 50,
    height: 50,
    resizeMode: 'contain',
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
    marginTop: 60,
  },
  boutoncouleur: {
    color: "#a5a5a5",
    textAlign: 'center',
    marginTop: 15,
    fontSize: 18,

  },
  buttonfacebook: {
    backgroundColor: '#3b5998',
    width: 350,
    height: 50,
    marginTop: 10,
  }, 
  TextInputStyle: {
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: 350,
    height: 50,
    paddingLeft: 10,
    marginTop: 10,
  },
  retour: {
    marginLeft: 30,
  },
  titlelogin: {
    top: -20,
    textAlign: 'left',
    fontSize: 25,
  },
  forgotpassword: {
    position: 'absolute',
    top: 450,
  }

});
