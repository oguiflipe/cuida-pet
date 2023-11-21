import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function Pets({navigation}){

  const [namePet, setNamePet] = useState({pet});
  const [racaPet, setRacaPet] = useState('');

  const pet = 'Roberto'
  const raca = 'Golden'

  const handleNamePet = () => {
    setNamePet(namePet);
  }

  const handleRacaPet = () => {
    setNamePet(racaPet);
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
            >{pet}</Text>
            <Text 
              style={styles.animalName}
              value={handleRacaPet}
            >{raca}</Text>
        </View>

        <View style={styles.img}>
            <Image
              style={styles.petLogo}
              source={require('../../assets/cachorro2.jpg')}
            />
            <Text 
              style={styles.animalName}
              value={handleNamePet}
            >{pet}</Text>
            <Text 
              style={styles.animalName}
              value={handleRacaPet}
            >{raca}</Text>
        </View>


        <View style={styles.img}>
            <Image
              style={styles.petLogo}
              source={require('../../assets/cachorro3.jpg')}
            />
            <Text 
              style={styles.animalName}
              value={handleNamePet}
            >{pet}</Text>
            <Text 
              style={styles.animalName}
              value={handleRacaPet}
            >{raca}</Text>
        </View>

        <View style={styles.img}>
            <Image
              style={styles.petLogo}
              source={require('../../assets/gato.jpg')}
            />
            <Text style={styles.animalName}>Fabricio</Text>
            <Text style={styles.animalName}>Vira-lata</Text>
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
          <Text style={styles.labelAgendamento}>Vacina</Text>
          <Text style={styles.labelInfos}>Nome: </Text>
          <Text style={styles.labelInfos}>Data: </Text>
          <Text style={styles.labelInfos}>Horário: </Text>
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
          <Text style={styles.labelInfos}>Nome: </Text>
          <Text style={styles.labelInfos}>Data: </Text>
          <Text style={styles.labelInfos}>Horário: </Text>
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
          <Text style={styles.labelInfos}>Nome: </Text>
          <Text style={styles.labelInfos}>Data: </Text>
          <Text style={styles.labelInfos}>Horário: </Text>
        </View>
          <View style={styles.img2}>
            <Image
              style={styles.petLogo2}
              source={require('../../assets/cachorro2.jpg')}
            />
        </View>
      </View>

      <View style={styles.cardAgendamentos}>
        <View style={styles.textAgendamentos}>
          <Text style={styles.labelAgendamento}>Vacina</Text>
          <Text style={styles.labelInfos}>Nome: </Text>
          <Text style={styles.labelInfos}>Data: </Text>
          <Text style={styles.labelInfos}>Horário: </Text>
        </View>
          <View style={styles.img2}>
            <Image
              style={styles.petLogo2}
              source={require('../../assets/cachorro3.jpg')}
            />
        </View>
      </View>

      <View style={styles.cardAgendamentos}>
        <View style={styles.textAgendamentos}>
          <Text style={styles.labelAgendamento}>Vacina</Text>
          <Text style={styles.labelInfos}>Nome: </Text>
          <Text style={styles.labelInfos}>Data: </Text>
          <Text style={styles.labelInfos}>Horário: </Text>
        </View>
          <View style={styles.img2}>
            <Image
              style={styles.petLogo2}
              source={require('../../assets/cachorro.jpg')}
            />
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
    }

  });
