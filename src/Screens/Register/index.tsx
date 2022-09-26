import { View, Text, Button } from 'react-native'
import React from 'react'

type Props = {
  setAuth: () => void
}

const RegisterScreen = ({ setAuth }: Props) => {
  return (
    <View>
      <Text>Register</Text>
      <Button title="Login" onPress={setAuth} />
    </View>
  )
}

export default RegisterScreen
