import React from 'react';
import { Text, StyleSheet, TouchableOpacityProps, TouchableOpacity } from "react-native";




export function PrimaryButton({title, style, ...rest}) {
    return( 
        <TouchableOpacity 
            {...rest}
            style={styles.button}
        >
          <Text style={styles.textButton}>{title}</Text>      
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
      width: '90%',
      backgroundColor: '#6E42F1',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 15,
      height: 40,
      padding: 10,
      borderRadius: 5
    },
    textButton:{
      color: '#FFF',
      textAlign: 'center',
      fontSize: 16,
    }
  });