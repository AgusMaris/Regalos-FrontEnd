import { View, Text, Modal, StyleSheet, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { Button } from '../../../../../../Components/Buttons'
import colors from '../../../../../../Assets/colors'
import CustomImage from '../../../../../../Assets/images'
import AnimatedLottieView from 'lottie-react-native'
import Api from '../../../../../../Api'
import { GiftSchema } from '../../../../../../schemas/Gift'
import { delay } from '../../../../../../utils/functions'

type Props = {
  isOpen: boolean
  onRequestClose: () => void
}

const MysteriousBoxModal = ({ isOpen, onRequestClose }: Props) => {
  const [showGiftAnimation, setShowGiftAnimation] = useState(false)

  const [gift, setGift] = useState<GiftSchema | null>(null)

  const [giftLoading, setGiftLoading] = useState(false)

  const buyMysteriousGift = async () => {
    setGiftLoading(true)
    setShowGiftAnimation(true)
    const gift = await Api.Gifts.getMysteriousBoxGift('1')
    setGift(gift)
    setGiftLoading(false)
  }
  console.log(showGiftAnimation, gift)

  const showConfirmationAlert = () => {
    Alert.alert('Confirmación de compra', '¿Estas seguro de querer comprar este regalo?', [
      { onPress: () => console.log('cancel'), text: 'No' },
      { onPress: buyMysteriousGift, text: 'Si' },
    ])
  }

  const handleAnimationFinish = async () => {
    await delay(3000)
    setShowGiftAnimation(false)
  }

  const handleRequestClose = () => {
    setShowGiftAnimation(false)
    setGift(null)
    onRequestClose()
  }
  return (
    <Modal
      animationType="fade"
      style={{ flex: 1 }}
      visible={isOpen}
      onRequestClose={handleRequestClose}
      transparent
    >
      <View style={{ backgroundColor: '#00000077', flex: 1, justifyContent: 'flex-end' }}>
        <View style={styles.contentContainer}>
          {gift === null && (
            <Text style={styles.buyMysteriousBoxText}>Desea comprar la caja misteriosa?</Text>
          )}

          <View style={{ height: 110 }}>
            {gift !== null ? (
              showGiftAnimation ? (
                <AnimatedLottieView
                  source={require('../../../../../../Assets/animations/gift_open.json')}
                  style={{ width: '160%', transform: [{ translateY: -65 }] }}
                  onAnimationFinish={handleAnimationFinish}
                  loop={false}
                  autoPlay
                />
              ) : (
                <View>
                  <View style={{ height: 200, width: 200 }}>
                    <Image
                      source={{ uri: gift.imgSource }}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />
                  </View>
                  <Button text="Siguiente" style={{ marginTop: 75 }} onPress={handleRequestClose} />
                </View>
              )
            ) : giftLoading ? (
              <AnimatedLottieView
                source={require('../../../../../../Assets/animations/loader.json')}
                style={{ width: '75%' }}
                autoPlay
                loop
              />
            ) : (
              <View style={{ width: 110, height: 110 }}>
                <CustomImage name="gift" />
              </View>
            )}
          </View>
          {gift === null && (
            <>
              <Text style={styles.priceText}>$5000</Text>
              <Button text="Comprar" onPress={showConfirmationAlert} disabled={giftLoading} />
            </>
          )}
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
