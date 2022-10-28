import { StylesContext } from '@material-ui/styles'
import React, { useState } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../../../Assets/colors'
import { GiftSchema } from '../../../../schemas/Gift'
import { Container } from '@material-ui/core';
import { Button } from 'react-native-paper';

export interface GiftListItemInterface {
  gift: GiftSchema
}

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height



 

const GiftListItem: React.FC<GiftListItemInterface> = ({ gift }) => 
{
  const [fav,setFav]=useState(false)
  return(
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

      <View style={{
        backgroundColor: colors.primary,
        position: 'relative',
        bottom: 0,
        left: 290,
        alignItems: "stretch",
        width: '10%',
        height: 40,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
      }}>
        <TouchableOpacity onPress={()=> setFav(!fav)}>
          <Ionicons
            name="star"
            size={32}
          color={fav ? "#fa60e5": "#fff"} />
        </TouchableOpacity>

      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        {gift.imgSource !== '' && (
          <Image
            source={{ uri: gift.imgSource }}
            style={{
              marginTop: -15,
              height: '100%',
              width: '35%',
              resizeMode: 'contain',
            }} />
        )}
        <Text style={{ color: colors.darkGrey, fontWeight: 'bold', fontSize: 20, marginTop: 1 }}>
          {gift.name}
        </Text>
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
        }} />
    </View>
  </View>
)
}

export default GiftListItem