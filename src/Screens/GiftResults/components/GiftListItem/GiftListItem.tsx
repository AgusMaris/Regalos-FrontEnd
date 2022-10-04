import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import colors from '../../../../Assets/colors'
import { GiftSchema } from '../../../../schemas/Gift'
export interface GiftListItemInterface {
  gift: GiftSchema
}

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const GiftListItem: React.FC<GiftListItemInterface> = ({ gift }) => {
  return (
    <View style={{ flexBasis: '50%', alignItems: 'center', marginTop: 20 }}>
      <View
        style={{
          elevation: 8,
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 10,
          width: HEIGHT / 6,
          height: HEIGHT / 6,
        }}
      >
        <Image source={{ uri: gift.imgSource }} style={{}} />
      </View>
      <Text style={{ color: colors.darkGrey, fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>
        {gift.name}
      </Text>
    </View>
  )
}

export default GiftListItem
