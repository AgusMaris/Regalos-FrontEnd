import { Alert, SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import { Card, TextInput, Button } from 'react-native-paper'
import { loginStyle } from './style'
import { emailValidator, passwordValidator } from '../../utils/login'
import colors from '../../Assets/colors'
import createClient from '../../services/Auth'
import { useAuth } from '../../Components/Providers/AuthProvider'

type Props = {
  setAuth: () => void
}

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const _onLoginPressed = async (e) => {
    e.preventDefault()
    try {
      login(email, password)
      console.log(email, password)
    } catch (error) {
      console.error(error)
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
            onChangeText={(value) => {
              setEmail(value)
            }}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            style={loginStyle.input}
            activeUnderlineColor={colors.primary}
          />
          <TextInput
            label="Contraseña"
            returnKeyType="done"
            onChangeText={(value) => {
              setPassword(value)
            }}
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
