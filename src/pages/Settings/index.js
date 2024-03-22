import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function Login({navigation}){

    return( 
    <View style={styles.container}>
      
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            navigation.navigate('Login')
            console.log('Clicou!')
          }}
        >

          <Text style={styles.textButton}>
          <Ionicons style={styles.icon} name="log-out-outline" size={24} />  
          Sair 
          </Text>    

        </TouchableOpacity>
    </View>)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      width: '90%',
      justifyContent: 'center',
      height: 50,
      borderRadius: 5,
      textAlign: 'left',
      paddingLeft: 20,
      borderWidth: 1,
      borderColor: '#8a8d8f',
    },
    textButton:{
      color: '#8a8d8f',
      fontSize: 16,
    },
    icon:{
      color: 'red',
    },
    
  });