import AnimatedLottieView from 'lottie-react-native'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../../../../../../../../Assets/colors'
import CustomImage from '../../../../../../../../Assets/images'
import { Button } from '../../../../../../../../Components/Buttons'

type Props = {
  showConfirmationAlert: () => void
  giftLoading: boolean
}

export default function MysteriousBoxSummary({ giftLoading, showConfirmationAlert }: Props) {
  return giftLoading ? (
    <AnimatedLottieView
      source={require('../../../../../../../../Assets/animations/loader.json')}
      style={{ width: '75%' }}
      autoPlay
      loop
    />
  ) : (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <Text style={styles.buyMysteriousBoxText}>Desea comprar la caja misteriosa?</Text>
      <View style={{ width: 110, height: 110 }}>
        <CustomImage name="gift" />
      </View>

      <Text style={styles.priceText}>$5000</Text>
      <View style={{ alignSelf: 'stretch' }}>
        <Button text="Comprar" onPress={showConfirmationAlert} disabled={giftLoading} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buyMysteriousBoxText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkGrey,
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
})
