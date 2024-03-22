import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryInput } from "../../components/PrimaryInput";

export default function Account({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Ionicons name="paw-outline" size={100} color="#6E42F1" />
      </View>

      <PrimaryInput placeholder="Nome:" />
      <PrimaryInput placeholder="E-mail:" />
      <PrimaryInput placeholder="Senha:" />

      <PrimaryButton title="Cadastrar" />

      <View style={styles.containerLabels}>
        <Text style={styles.TextLabel}>OU</Text>

        <TouchableOpacity style={styles.buttonLabel}>
          <Text
            style={styles.TextLabel2}
            onPress={() => {
              navigation.navigate("Login");
              console.log("Clicou!");
            }}
          >
            Já tem uma conta? Conecte-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerImg: {
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  containerLabels: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  TextLabel: {
    fontSize: 15,
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
  },
  TextLabel2: {
    fontSize: 14,
    textAlign: "center",
    padding: 10,
  },
});
