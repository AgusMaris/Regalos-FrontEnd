import { Alert, SafeAreaView, View } from "react-native";
import {Card, TextInput, Button } from "react-native-paper";
import React , { useState } from 'react';
import { registerStyle } from "./style";
import { emailValidator, passwordValidator ,confirmpasswordValidator } from "../../utils/register";

type Props = {
  setAuth: () => void
}

const RegisterScreen = ({ setAuth, navigation }: Props) => {

  const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmpassword, setConfirmPassword] = useState({ value: "", error: "" });

  const _onRegisterPressed = () => {
		const emailError = emailValidator(email.value);
		const passwordError = passwordValidator(password.value);
    const confirmpasswordError = confirmpasswordValidator(confirmpassword.value, password.value);
    console.log(emailError, passwordError, confirmpasswordError);
    console.log(password.value, confirmpassword.value);

		if (emailError || passwordError || confirmpasswordError ) {
			setEmail({ ...email, error: emailError });
			setPassword({ ...password, error: passwordError });
      setConfirmPassword({ ...password, error: passwordError });
			return;
		}
		
    navigation.navigate("Login");

    }
	

  

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
        label="Email"
				    returnKeyType="next"
				    value={email.value}
        placeholder={"Email"}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        autoCapitalize={"none"}
      />
      <TextInput
        style={registerStyle.input}
        label="Contraseña"
						returnKeyType="done"
						value={password.value}
        placeholder={"Contraseña"}
        secureTextEntry
        onChangeText={(text) => setPassword({ value: text, error: "" })}
				error={!!password.error}
      />
      <TextInput
        style={registerStyle.input}
        label="Confirmar Contraseña"
						returnKeyType="done"
						value={confirmpassword.value}
        placeholder={"ConfirmarContraseña"}
        secureTextEntry
        onChangeText={(text) => setConfirmPassword({ value: text, error: "" })}
				error={!!confirmpassword.error}
      />
      

      <Button
						mode="contained"
						onPress={_onRegisterPressed}
						
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
