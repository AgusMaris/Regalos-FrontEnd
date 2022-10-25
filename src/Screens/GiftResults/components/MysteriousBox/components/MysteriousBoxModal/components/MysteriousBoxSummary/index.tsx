import React from 'react'
import { View } from 'react-native'

type Props = {}

export default function MysteriousBoxSummary({}: Props) {
  return (
    <View>
      <Text style={styles.buyMysteriousBoxText}>Desea comprar la caja misteriosa?</Text>
    </View>
  )
}
