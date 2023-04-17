import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,   Image, Icon
 } from 'react-native'

class Inputs extends Component {
   
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
    
         <View style = {styles.container}>
         <Text>SALADA DE FRUTAS DA JANE</Text>
        
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "E-mail"
               placeholderTextColor = "black"
               autoCapitalize = "nane"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "senha"
               placeholderTextColor = "black"
               autoCapitalize = "number"
               onChangeText = {this.handlesenha}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.name(this.state.idade, this.state.teste)
               }>
               <Text style = {styles.submitButtonText}> LOGIN </Text>
            </TouchableOpacity>

    
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 10,
      height: 50,
      borderColor: '#000000',
      borderWidth: 'bold',
      borderRadios: 3,
   },
   submitButton: {
      backgroundColor: "#20B2AA",
      padding: 10,
      margin: 10,
      with: 300,
      height: 42,
      borderRadios: 4,
      alignItems: 'center',
      justifyContent: 'center',
   },
   submitButtonText:{
     fontSize: 16,
     fontwight: 'bold',
      color: 'white'
   },
   container: {
     flex: 1,
     justifyContent: 'center',
     alifnItems: 'center',
     backgroundColor: '#D0E1D4',
   }
 
});
