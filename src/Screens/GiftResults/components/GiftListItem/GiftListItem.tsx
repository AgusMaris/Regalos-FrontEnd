import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, Linking, AppState, Alert } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import colors from '../../../../Assets/colors'
import { GiftSchema } from '../../../../schemas/Gift'
import Api from '../../../../Api'
import { useAuth } from '../../../../Components/Providers/AuthProvider'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../../Navigation/RootNavigator'

export interface GiftListItemInterface {
  gift: GiftSchema
}
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const GiftListItem: React.FC<GiftListItemInterface> = ({ gift }) => {
  console.log(gift)
  const [fav, setFav] = useState(false)
  const appState = useRef(AppState.currentState)
  const [storeOpened, setStoreOpened] = useState(false)
  const { user, beneficiary } = useAuth()
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'GiftResults'>>()

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active' && storeOpened) {
        console.log('App has come to the foreground!')
        setStoreOpened(false)
        Alert.alert('Realizaste la compra del regalo?', '', [
          {
            text: 'No',
            onPress: () => console.log('No Pressed'),
          },
          {
            text: 'Si',
            onPress: () => {
              Api.Gifts.buyGift(gift.id as string, user!.id, beneficiary!.id)
              navigation.navigate('Feedback')
            },
          },
        ])
      }

      appState.current = nextAppState

      console.log('AppState', appState.current)
    })

    return () => {
      subscription.remove()
    }
  }, [storeOpened])

  const handleGoToStore = (giftName: string) => {
    setStoreOpened(true)
    Linking.openURL('https://listado.mercadolibre.com.ar/' + giftName.split(' ').join('-'))
  }
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <View
        style={{
          elevation: 8,
          backgroundColor: '#fff',
          borderRadius: 10,
          width: WIDTH * 0.8,
          height: HEIGHT / 6,
        }}
      >
        <View
          style={{
            backgroundColor: colors.primary,
            position: 'absolute',
            right: 0,
            borderTopRightRadius: 10,
            width: '10%',
            height: 40,
          }}
        >
          <TouchableOpacity onPress={() => setFav(!fav)}>
            <Ionicons name="star" size={32} color={fav ? '#fa60e5' : '#fff'} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          {gift.imgSource !== '' && (
            <Image
              source={{ uri: gift.imgSource }}
              style={{
                marginTop: 20,
                height: '70%',
                width: '35%',
                resizeMode: 'contain',
              }}
            />
          )}
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: colors.darkGrey,
                fontWeight: 'bold',
                fontSize: 18,
                marginTop: 10,
                marginRight: 50,
              }}
            >
              {gift.name}
            </Text>
            <TouchableOpacity
              onPress={() => handleGoToStore(gift.name)}
              style={{
                position: 'absolute',
                backgroundColor: 'red',
                width: 50,
                height: 40,
                marginTop: 80,
                alignSelf: 'flex-end',
                marginBottom: 20,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
            >
              <Image
                source={require('../GiftListItem/mercadolibre.png')}
                style={{ width: 50, height: 40, marginTop: 60 }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.primary,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 10,
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
          }}
        />
      </View>
    </View>
  )
}

export default GiftListItem
