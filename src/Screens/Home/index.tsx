import { View, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { HomeScreenProps } from './types'
import colors from '../../Assets/colors'
import { white } from 'react-native-paper/lib/typescript/styles/colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useAuth } from '../../Components/Providers/AuthProvider'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

type Props = {
  setAuth: () => void
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const results = {}
  const { beneficiary, user, chooseBeneficiary } = useAuth()
  const findRandom = () => {
    navigation.navigate('GiftResults', { score: results })
  }
  console.log(beneficiary)

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      chooseBeneficiary(null)
    })
  }, [navigation])
  return (
    <View>
      {user?.type == 'Buscador' || beneficiary ? (
        <>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: colors.primary,
              marginBottom: 10,
              alignSelf: 'center',
              marginTop: 20,
            }}
          >
            Busquemos el regalo para
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: colors.primary,
              marginBottom: 10,
              alignSelf: 'center',
              marginTop: 10,
            }}
          >
            {beneficiary?.name} 😉
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
            <View
              style={{
                elevation: 2,
                padding: 10,
                borderRadius: 1,
                margin: 20,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate('Questions')}>
                <Image
                  source={require('./utils/questionmode.png')}
                  style={{ width: 120, height: 120 }}
                ></Image>
                <Text style={{ alignSelf: 'center' }}>Llenar Formulario</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                elevation: 2,
                padding: 10,
                borderRadius: 1,
                margin: 20,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('GiftResults', { score: results })
                }}
              >
                <Image source={require('./utils/fastmode.png')} style={{ width: 120, height: 120 }}></Image>
                <Text style={{ alignSelf: 'center' }}>Regalo Aleatorio</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: colors.primary,
              marginBottom: 10,
              alignSelf: 'center',
              marginTop: 20,
            }}
          ></Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={{
                elevation: 2,
                padding: 10,
                borderRadius: 1,
                margin: 20,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate('UploadProduct')}>
                <Image
                  source={require('./utils/product.png')}
                  style={{ width: 100, height: 100, alignSelf: 'center' }}
                ></Image>
                <Text style={{ alignSelf: 'center' }}>Cargar Productos</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                elevation: 2,
                padding: 10,
                borderRadius: 1,
                margin: 20,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate('SalesFeedback')}>
                <Image source={require('./utils/fastmode.png')} style={{ width: 120, height: 120 }}></Image>
                <Text style={{ alignSelf: 'center' }}>Tus ventas</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  )
}

export default HomeScreen
