import { Alert, SafeAreaView, View } from "react-native";
import {Card, TextInput, Button } from "react-native-paper";
import React , { useState } from 'react';
import { registerStyle } from "./style";

type Props = {
  setAuth: () => void
}

const RegisterScreen = ({ setAuth, navigation }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const _onLoguinPressed = () => {
    navigation.navigate("Login");
    
  };

  return (
    <SafeAreaView style={registerStyle.content}>
    <View style={registerStyle.view}>
    
      <Card.Content>
      <Card.Title
						title="REGISTRO"
						titleStyle={registerStyle.cardTitle}
					></Card.Title>
      <TextInput
        style={registerStyle.input}
        value={username}
        placeholder={"Email"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={registerStyle.input}
        value={password}
        placeholder={"Contraseña"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={registerStyle.input}
        value={confirmpassword}
        placeholder={"ConfirmarContraseña"}
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
      />
      

      <Button
						mode="contained"
						
						onPress={_onLoguinPressed}
						style={registerStyle.cardButton}
					>
						Registrarse
					</Button>
          
          </Card.Content>
			</View>

		</SafeAreaView>


  );
};






export default RegisterScreen
