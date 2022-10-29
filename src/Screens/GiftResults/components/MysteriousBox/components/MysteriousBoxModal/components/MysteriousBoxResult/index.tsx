import { View, Text, Image } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { Button } from '../../../../../../../../Components/Buttons'
import { GiftSchema } from '../../../../../../../../schemas/Gift'

type Props = {
  showGiftAnimation: boolean
  gift: GiftSchema | null
  giftLoading: boolean
  handleAnimationFinish: () => void
  handleRequestClose: () => void
}

const MysteriousBoxResult = ({
  gift,
  showGiftAnimation,
  giftLoading,
  handleAnimationFinish,
  handleRequestClose,
}: Props) => {
  return showGiftAnimation ? (
    <AnimatedLottieView
      source={require('../../../../../../../../Assets/animations/gift_open.json')}
      style={{ width: '160%' }}
      onAnimationFinish={handleAnimationFinish}
      loop={false}
      autoPlay
    />
  ) : (
    <View style={{ alignSelf: 'stretch', alignItems: 'center' }}>
      <View style={{ height: 200, width: 200 }}>
        <Image
          source={{ uri: gift?.imgSource }}
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
        />
      </View>
      <View style={{ alignSelf: 'stretch' }}>
        <Button text="Siguiente" style={{ marginTop: 75 }} onPress={handleRequestClose} />
      </View>
    </View>
  )
}

export default MysteriousBoxResult
