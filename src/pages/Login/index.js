import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { PrimaryButton } from '../../components/PrimaryButton';
import { PrimaryInput } from '../../components/PrimaryInput';



export default function Login({navigation}){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('');

    return( 
    <View style={styles.container}>
        <View style={styles.containerImg}> 
          <Ionicons name="paw-outline"size={100} color='#6E42F1' />
        </View>

        <PrimaryInput 
          placeholder='E-mail:'
          onChange={setEmail}
          value={email}
        />

        <PrimaryInput 
          secureTextEntry
          placeholder='Senha:'
          onChange={setPassword}
          value={password}
        />

        <PrimaryButton 
          title="Entrar" 
          onPress={() => {
            navigation.navigate('Home')
            console.log('Clicou!')
          }}
        />

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
    </View>)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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