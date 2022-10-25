import { View, Text, Modal, StyleSheet, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { Button } from '../../../../../../Components/Buttons'
import colors from '../../../../../../Assets/colors'
import { useNavigation } from '@react-navigation/native'
import { GiftResultsScreenProps } from '../../../../types'
import CustomImage from '../../../../../../Assets/images'
import AnimatedLottieView from 'lottie-react-native'

type Props = {
  isOpen: boolean
  onRequestClose: () => void
}

const MysteriousBoxModal = ({ isOpen, onRequestClose }: Props) => {
  const [giftOpen, setGiftOpen] = useState(false)
  const [showGift, setShowGift] = useState(false)

  const showConfirmationAlert = () => {
    Alert.alert('Confirmacion de compra', '¿Estas seguro de querer comprar este regalo?', [
      { onPress: () => console.log('cancel'), text: 'No' },
      { onPress: () => setGiftOpen(true), text: 'Si' },
    ])
  }
  return (
    <Modal
      animationType="fade"
      style={{ flex: 1 }}
      transparent
      visible={isOpen}
      onRequestClose={() => {
        setGiftOpen(false)
        setShowGift(false)
        onRequestClose()
      }}
    >
      <View style={{ backgroundColor: '#00000077', flex: 1, justifyContent: 'flex-end' }}>
        <View style={styles.contentContainer}>
          <Text style={styles.buyMysteriousBoxText}>Desea comprar la caja misteriosa?</Text>

          <View style={{ height: 110 }}>
            {giftOpen ? (
              <AnimatedLottieView
                source={require('../../../../../../Assets/animations/gift_open.json')}
                style={{ width: '160%', transform: [{ translateY: -65 }] }}
                loop={false}
                onAnimationFinish={() => setShowGift(true)}
                autoPlay
              />
            ) : (
              <View style={{ width: 110, height: 110 }}>
                <CustomImage name="gift" />
              </View>
            )}
          </View>
          <Text style={styles.priceText}>$5000</Text>
          <Button text="Comprar" onPress={showConfirmationAlert} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 20,
    height: '75%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
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

export default MysteriousBoxModal
