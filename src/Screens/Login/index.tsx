import { Alert, SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import { Card, TextInput, Button } from "react-native-paper";
import { loginStyle } from "./style";
import { emailValidator, passwordValidator } from "../../utils/login";
import logo from "./gifts.png";

type Props = {
	setAuth: () => void;
};
const LoginScreen = ({ setAuth }: Props) => {
	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });
	const _onLoginPressed = () => {
		const emailError = emailValidator(email.value);
		const passwordError = passwordValidator(password.value);

		if (emailError || passwordError) {
			setEmail({ ...email, error: emailError });
			setPassword({ ...password, error: passwordError });
			return;
		}
		//// cambio de pantalla
		setAuth();
	};

	return (
		<SafeAreaView style={loginStyle.content}>
			<View style={loginStyle.view}></View>
			<Card style={loginStyle.card}>
				<Card.Content>
					<Card.Title
						title="Regala2"
						titleStyle={loginStyle.cardTitle}
					></Card.Title>
					<img src={logo} alt="Logo" height={200} />
					<TextInput
						label="Email"
						returnKeyType="next"
						value={email.value}
						onChangeText={(text) => setEmail({ value: text, error: "" })}
						error={!!email.error}
						////errorText={email.error}
						autoCapitalize="none"
						////autoCompleteType="email"
						textContentType="emailAddress"
						keyboardType="email-address"
						style={loginStyle.input}
					></TextInput>
					<TextInput
						label="Contraseña"
						returnKeyType="done"
						value={password.value}
						onChangeText={(text) => setPassword({ value: text, error: "" })}
						error={!!password.error}
						////errorText={password.error}
						secureTextEntry
						style={loginStyle.input}
					></TextInput>
					<Button
						mode="contained"
						onPress={() => Alert.alert("")}
						style={loginStyle.cardButton}
					>
						Recuperar contraseña
					</Button>
					<Button
						mode="contained"
						////onPress={() => Alert.alert("Simple Button pressed")}
						onPress={_onLoginPressed}
						////onPress={setAuth}
						style={loginStyle.cardButton}
					>
						Ingresar
					</Button>
					<Button
						mode="contained"
						onPress={() => Alert.alert("")}
						style={loginStyle.cardButton}	
					>
						Registrarse
					</Button>
				</Card.Content>
			</Card>
		</SafeAreaView>
	);
};

export default LoginScreen;
