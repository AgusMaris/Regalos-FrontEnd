import { View, Text, Button } from 'react-native'
import React from 'react'

type Props = {
  setAuth: () => void
}

const HomeScreen = ({ setAuth }: Props) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Cerrar sesion" onPress={setAuth} />
    </View>
  )
}

export default HomeScreen
