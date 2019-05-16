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


export default class LoginScreen extends React.Component {
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
                require('../assets/images/groupe.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Form')}>
                <Image 
              source={
                require('../assets/images/retour.png')
              } 
              style={styles.retour}
            />
            </TouchableOpacity>
          <View style={styles.getStartedContainer}>
            <Text style={styles.titlelogin}>Log in</Text>
         
                
      

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Email address"
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyle}
 
        />
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Password"
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyle}
 
          // Making the Text Input Text Hidden.
          secureTextEntry={true}
 
        />
        <TouchableOpacity
         style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
         <Text style={styles.boutoncouleur}> Log in </Text>
       </TouchableOpacity>
       <Text style={styles.forgotpassword}>Forgot your password ?</Text>
        
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
    width: 400,
    height: 250,
    resizeMode: 'contain',
    top: -100,
    left: 100,
    position: 'absolute',
    
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
    backgroundColor: '#d6d7da',
    width: 350,
    height: 50,
    marginTop: 10,
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
