import { View, Text, Modal, StyleSheet, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { Button } from '../../../../../../Components/Buttons'
import colors from '../../../../../../Assets/colors'
import CustomImage from '../../../../../../Assets/images'
import AnimatedLottieView from 'lottie-react-native'
import Api from '../../../../../../Api'
import { GiftSchema } from '../../../../../../schemas/Gift'
import { delay } from '../../../../../../utils/functions'
import MysteriousBoxSummary from './components/MysteriousBoxSummary'
import MysteriousBoxResult from './components/MysteriousBoxResult'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../../../../../Navigation/RootNavigator'
import { useAuth } from '../../../../../../Components/Providers/AuthProvider'

type Props = {
  isOpen: boolean
  onRequestClose: () => void
}

const MysteriousBoxModal = ({ isOpen, onRequestClose }: Props) => {
  const [showGiftAnimation, setShowGiftAnimation] = useState(false)

  const { params } = useRoute<RouteProp<RootStackParamList, 'GiftResults'>>()

  const { user } = useAuth()

  const [gift, setGift] = useState<GiftSchema | null>(null)

  const [giftLoading, setGiftLoading] = useState(false)

  const buyMysteriousGift = async () => {
    setGiftLoading(true)
    setShowGiftAnimation(true)
    const gift = await Api.Gifts.getMysteriousBoxGift(params.score, user!.id)
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
          {gift === null ? (
            <>
              <MysteriousBoxSummary giftLoading={giftLoading} showConfirmationAlert={showConfirmationAlert} />
            </>
          ) : (
            <>
              <MysteriousBoxResult
                gift={gift}
                giftLoading={giftLoading}
                handleAnimationFinish={handleAnimationFinish}
                handleRequestClose={handleRequestClose}
                showGiftAnimation={showGiftAnimation}
              />
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
