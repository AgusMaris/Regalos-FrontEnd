import { Alert, SafeAreaView, View } from 'react-native'
import { Card, TextInput, Button } from 'react-native-paper'
import React, { useState } from 'react'
import { registerStyle } from './style'
import { emailValidator, passwordValidator, confirmpasswordValidator } from '../../utils/register'
import colors from '../../Assets/colors'

type Props = {
  setAuth: () => void
}

const RegisterScreen = ({ setAuth, navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confirmpassword, setConfirmPassword] = useState({ value: '', error: '' })

  const _onRegisterPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const confirmpasswordError = confirmpasswordValidator(confirmpassword.value, password.value)
    console.log(emailError, passwordError, confirmpasswordError)
    console.log(password.value, confirmpassword.value)

    if (emailError || passwordError || confirmpasswordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setConfirmPassword({ ...password, error: passwordError })
      return
    }

    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={registerStyle.content}>
      <View style={registerStyle.view}>
        <Card.Content style={{ justifyContent: 'space-around', flex: 1 }}>
          <Card.Title
            title="Registro"
            titleStyle={{ color: colors.primary, fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}
          ></Card.Title>
          <TextInput
            style={registerStyle.input}
            label="Email"
            returnKeyType="next"
            value={email.value}
            placeholder={'Email'}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            autoCapitalize={'none'}
            activeUnderlineColor={colors.primary}
          />
          <TextInput
            style={registerStyle.input}
            label="Contraseña"
            returnKeyType="done"
            value={password.value}
            placeholder={'Contraseña'}
            secureTextEntry
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            activeUnderlineColor={colors.primary}
          />
          <TextInput
            style={registerStyle.input}
            label="Confirmar Contraseña"
            returnKeyType="done"
            value={confirmpassword.value}
            placeholder={'Confirmar Contraseña'}
            secureTextEntry
            onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
            error={!!confirmpassword.error}
            activeUnderlineColor={colors.primary}
          />

          <Button mode="contained" onPress={_onRegisterPressed} style={registerStyle.cardButton}>
            Registrarse
          </Button>
        </Card.Content>
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen
