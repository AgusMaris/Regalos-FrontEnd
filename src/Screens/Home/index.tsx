import { View, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { HomeScreenProps } from './types'
import colors from '../../Assets/colors'
import { white } from 'react-native-paper/lib/typescript/styles/colors'
import { useAuth } from '../../Components/Providers/AuthProvider'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

type Props = {
  setAuth: () => void
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const results = {}
  const { beneficiary } = useAuth()
  const findRandom = () => {
    navigation.navigate('GiftResults', { score: results })
  }
  console.log(beneficiary)
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: colors.primary,
          marginBottom: 10,
          position: 'absolute',
          alignSelf: 'center',
          marginTop: 20,
        }}
      >
        Busquemos el regalo de {beneficiary?.name}
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: HEIGHT / 1.8,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Questions')}>
          <Image source={require('./utils/questionmode.png')} style={{ width: 150, height: 150 }}></Image>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            findRandom()
          }}
        >
          <Image source={require('./utils/fastmode.png')} style={{ width: 150, height: 150 }}></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen
