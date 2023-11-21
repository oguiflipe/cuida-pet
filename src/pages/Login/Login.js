import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function Login({navigation}){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('');

    return( 
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <View style={styles.containerImg}> 
          <Ionicons name="paw-outline"size={100} color='#6E42F1' />
        </View>
        <TextInput 
          style={styles.input}
          placeholder='E-mail:'
          onChange={setEmail}
          defaultValue={email}
        />

        <TextInput 
          style={styles.inputPass}
          placeholder='Senha:'
          onChange={setPassword}
          defaultValue={password}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>      
        </TouchableOpacity>

        <View style={styles.containerLabels}>
          <Text style={styles.TextLabel}>OU</Text>
         
          <TouchableOpacity style={styles.buttonLabel}>
            <Text style={styles.TextLabel2}>Esqueceu a sua senha?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.buttonLabel}
            onPress={() => {
              navigation.navigate('Cadastro')
              console.log('Clicou!')
            }}
          >
            <Text style={styles.TextLabel2}>Não tem uma conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerInput:{
      width: '90%',
    },
    inputPass:{
      height: 40,
      padding: 10,
      margin: 10,
      borderWidth: 1,
      borderColor: '#8a8d8f',
      borderRadius: 25
    },
    input:{
      margin: 10,
      height: 40,
      padding: 10,
      borderWidth: 1,
      borderColor: '#8a8d8f',
      borderRadius: 25
    },
    button:{
      width: '90%',
      backgroundColor: '#6E42F1',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 15,
      height: 40,
      padding: 10,
      borderRadius: 50
    },
    textButton:{
      color: '#FFF',
      textAlign: 'center',
      fontSize: 16,
    },
    containerImg:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 25
    },
    containerLabels:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5
    },
    TextLabel:{
      fontSize: 15,
      textAlign: 'center',
      padding: 5,
      fontWeight: 'bold'
    },
    TextLabel2:{
      fontSize: 14,
      textAlign: 'center',
      padding: 10,
    }
  });