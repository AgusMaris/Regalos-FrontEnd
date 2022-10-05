import { Alert, SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import { Card, TextInput, Button } from 'react-native-paper'
import { loginStyle } from './style'
import { emailValidator, passwordValidator } from '../../utils/login'
import colors from '../../Assets/colors'

type Props = {
  setAuth: () => void
}
const LoginScreen = ({ setAuth, navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    if (email.value == 'TEST@hotmail.com' && password.value == '1234') {
      console.log(email.value)
      console.log(password.value)
      setAuth()
    }
  }
  const _onRegisterPressed = () => {
    navigation.navigate('Register')
  }
  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card.Content style={{ flex: 1, justifyContent: 'space-around' }}>
          <Card.Title title="Login" titleStyle={loginStyle.cardTitle}></Card.Title>
          <TextInput
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            style={loginStyle.input}
            activeUnderlineColor={colors.primary}
          />
          <TextInput
            label="Contraseña"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            secureTextEntry
            style={loginStyle.input}
            activeUnderlineColor={colors.primary}
          />
          <Button mode="contained" onPress={_onLoginPressed} style={loginStyle.cardButton}>
            Ingresar
          </Button>
          <Button mode="contained" onPress={_onRegisterPressed} style={loginStyle.cardButton}>
            Registrarse
          </Button>
        </Card.Content>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
