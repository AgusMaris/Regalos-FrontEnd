import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, Button, Linking } from 'react-native'
import colors from '../../../../Assets/colors'
import { GiftSchema } from '../../../../schemas/Gift'
export interface GiftListItemInterface {
  gift: GiftSchema
}
import { useLinkTo } from '@react-navigation/native';


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const GiftListItem: React.FC<GiftListItemInterface> = ({ gift }) => {

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
        <View style={{ flexDirection: 'row', flex: 1 }}>
          {gift.imgSource !== '' && (
            <Image
              source={{ uri: gift.imgSource }}
              style={{
                marginTop: 10,

                height: '75%',
                width: '50%',
                resizeMode: 'contain',
              }}
            />
          )}
          <View style={{flex:1}}> 
              <Text style={{ color: colors.darkGrey, fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>
                {gift.name}
              </Text>
               <TouchableOpacity onPress={() =>Linking.openURL("https://listado.mercadolibre.com.ar/"+gift.name)} style={{marginTop:20,alignSelf:'stretch',marginBottom:20,justifyContent:'flex-end',alignItems:'flex-end'}}>
                    <Image source={require('../GiftListItem/mercadolibre.png')} style={{width:50,height:40,right:10}}></Image>
                </TouchableOpacity></View>
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

