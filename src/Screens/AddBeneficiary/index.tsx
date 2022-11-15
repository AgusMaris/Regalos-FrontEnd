import { SafeAreaView, View } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { addBeneficiaryStyle } from "./style";
import colors from "../../Assets/colors";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PrivateValueStore } from "@react-navigation/native";

type Props = {
  setAuth: () => void;
};
const API = "http://192.168.88.6:3000/newbeneficiary";

const AddBeneficiaryScreen = () => {
  const [name, setName] = useState({ value: "" });
  const [apellido, setApellido] = useState({ value: "" });
  const [post, setPost] = React.useState(null);

  function createPost() {
    console.log(name.value, apellido.value);
    axios
      .post(API, {
        name: name.value,

        apellido: apellido.value,
      })
      .then((response) => {
        setPost(response.data);
        navigation.navigate("Home");
      });
  }

  return (
    <SafeAreaView style={addBeneficiaryStyle.content}>
      <View style={addBeneficiaryStyle.view}>
        <Card.Content style={{ flex: 1, justifyContent: "space-around" }}>
          <Card.Title
            title="Agregar beneficiario"
            titleStyle={addBeneficiaryStyle.cardTitle}
          ></Card.Title>
          <TextInput
            label="Nombre"
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setName({ value: text })}
            style={addBeneficiaryStyle.input}
            activeUnderlineColor={colors.primary}
          />
          <TextInput
            label="Apellido"
            returnKeyType="done"
            onChangeText={(text) => setApellido({ value: text })}
            style={addBeneficiaryStyle.input}
            activeUnderlineColor={colors.primary}
          />
          <Button
            mode="contained"
            onPress={createPost}
            style={addBeneficiaryStyle.cardButton}
          >
            Guardar
          </Button>
        </Card.Content>
      </View>
    </SafeAreaView>
  );
};

export default AddBeneficiaryScreen;
