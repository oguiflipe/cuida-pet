import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Button } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function Pets({navigation}){

  //array com os nomes e raças dos animais
  var raca = ["Golden", "Salsisha", "Vira-Lata", "Vira-Lata"];
  var pet = ["Roberto", "Claudio", "Berenice", "Romário"];

  //array com os horários
  var horarioVisita = ["14:00", "15:40", "16:00", "16:30"]
  var dataVisita = ["24/03/2024", "27/03/2024", "27/03/2024"]

  const [namePet, setNamePet] = useState({pet});
  const [racaPet, setRacaPet] = useState({raca});

  
  const handleNamePet = () => {
    setNamePet(namePet);
  }

  const handleRacaPet = () => {
    setRacaPet(racaPet);
  }


    return( 
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pets</Text>

      <ScrollView 
        style={styles.scroollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >

      <View style={styles.containerImg}>
        <View style={styles.img}>
            <Image
              style={styles.petLogo}
              source={require('../../assets/cachorro.jpg')}
            />
            <Text 
              style={styles.animalName}
              value={handleNamePet}
            >{pet[0]}</Text>
            <Text 
              style={styles.animalName}
              value={handleRacaPet}
            >{raca[0]}</Text>
        </View>

        <View style={styles.img}>
            <Image
              style={styles.petLogo}
              source={require('../../assets/cachorro2.jpg')}
            />
            <Text 
              style={styles.animalName}
              value={handleNamePet}
            >{pet[1]}</Text>
            <Text 
              style={styles.animalName}
              value={handleRacaPet}
            >{raca[1]}</Text>
        </View>


        <View style={styles.img}>
            <Image
              style={styles.petLogo}
              source={require('../../assets/cachorro3.jpg')}
            />
            <Text 
              style={styles.animalName}
              value={handleNamePet}
            >{pet[2]}</Text>
            <Text 
              style={styles.animalName}
              value={handleRacaPet}
            >{raca[2]}</Text>
        </View>

        <View style={styles.img}>
        <Image
              style={styles.petLogo}
              source={require('../../assets/gato.jpg')}
            />
            <Text 
              style={styles.animalName}
              value={handleNamePet}
            >{pet[3]}</Text>
            <Text 
              style={styles.animalName}
              value={handleRacaPet}
            >{raca[3]}</Text>
        </View>

      

        <TouchableOpacity 
          style={styles.btnAdd}
          onPress={() => {
            navigation.navigate('NewPet')
            console.log('Clicou!')
          }}
        >
          <Ionicons style={styles.petAdd} name="md-add-circle" />
        </TouchableOpacity>
      </View>
      </ScrollView>




      <Text style={styles.title2}>Agendamentos</Text>

      <ScrollView 
        style={styles.scroollView2}
        showsHorizontalScrollIndicator={false}
      >
      <View style={styles.cardAgendamentos}>
        <View style={styles.textAgendamentos}>
          <Text style={styles.labelAgendamento}>Banho e Tosa</Text>
          <Text style={styles.labelInfos}>Nome: {pet[0]} </Text>
          <Text style={styles.labelInfos}>Data: {dataVisita[1]}</Text>
          <Text style={styles.labelInfos}>Horário: {horarioVisita[0]}h</Text>
        </View>
          <View style={styles.img2}>
            <Image
              style={styles.petLogo2}
              source={require('../../assets/cachorro.jpg')}
            />
        </View>
      </View>

      <View style={styles.cardAgendamentos}>
        <View style={styles.textAgendamentos}>
          <Text style={styles.labelAgendamento}>Vacina</Text>
          <Text style={styles.labelInfos}>Nome: {pet[3]}</Text>
          <Text style={styles.labelInfos}>Data: {dataVisita[0]}</Text>
          <Text style={styles.labelInfos}>Horário: {horarioVisita[2]}h</Text>
        </View>
          <View style={styles.img2}>
            <Image
              style={styles.petLogo2}
              source={require('../../assets/gato.jpg')}
            />
        </View>
      </View>


      <View style={styles.cardAgendamentos}>
        <View style={styles.textAgendamentos}>
          <Text style={styles.labelAgendamento}>Vacina</Text>
          <Text style={styles.labelInfos}>Nome: {pet[0]}</Text>
          <Text style={styles.labelInfos}>Data: {dataVisita[2]}</Text>
          <Text style={styles.labelInfos}>Horário: {horarioVisita[3]}h </Text>
        </View>
          <View style={styles.img2}>
            <Image
              style={styles.petLogo2}
              source={require('../../assets/cachorro.jpg')}
            />
        </View>
      </View>

      <View style={styles.cardNewAgendamentos}>
        <View style={styles.textNewAgendamentos}>
          
        <TouchableOpacity 
          style={styles.btnAddConsult}
          onPress={() => {
            navigation.navigate('')
            console.log('Clicou!')
          }}
        >
          <Ionicons style={styles.petAdd} name="md-add-circle" />
          <Text style={styles.newConsult}>Adicionar nova consulta</Text>
        </TouchableOpacity>
        </View>
      </View>

      </ScrollView>

    </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    title:{
      color: '#8a8d8f',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 50
    },

    //Estilo dos animais adicionados
    containerImg:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'      
    },
    scroollView:{
      backgroundColor: '#ECECEC',
      width: '100%',
      height: 300
    },
    scroollView2:{
      width: '100%',
      marginLeft: 20
    },
    img:{ 
      width: 100,
      height: 100,
      borderRadius: 50,
      margin: 10,
    },
    petLogo:{
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    petAdd:{
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 50,
      color: '#6E42F1'
    },

    title2:{
      color: '#8a8d8f',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 50,
      borderTopWidth: .5,
      padding: 10
    },
    animalName:{
      color: '#8a8d8f',
      fontSize: 12,
      alignSelf: 'center'
    },


    //card de agendamentos

    cardAgendamentos:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      borderBottomWidth: 1,
      borderColor: '#8a8d8f',
      borderRadius: 5,
      marginTop: 10,
      padding: 10
    },
    img2:{
      width: 50,
      height: 50,
      borderRadius: 50,
      margin: 10
    },
    textAgendamentos:{
      padding: 10
    },
    petLogo2:{
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    labelAgendamento:{
      color: '#8a8d8f',
      fontSize: 16,
      fontWeight: 'bold',
    },
    labelInfos:{
      color: '#8a8d8f',
      fontSize: 14,
    },

    //botão adicionar nova consulta

    btnAddConsult:{
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 50,
      color: '#6E42F1'
    },
    cardNewAgendamentos:{
      float: 'right',
      cursor: 'pointer',
      zIndex: 0,
      padding: 20,
      position: 'relative'
    },
    newConsult:{
      color: '#8a8d8f',
      fontSize: 16,
      fontWeight: 'bold',
    }
  });
