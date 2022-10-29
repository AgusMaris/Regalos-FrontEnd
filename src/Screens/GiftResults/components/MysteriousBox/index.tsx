import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../../Assets/colors'
import MysteriousBoxModal from './components/MysteriousBoxModal'
import CustomImage from '../../../../Assets/images'

type Props = {}

const MysteriousBox = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <>
      <View style={{ padding: 25, alignItems: 'center' }}>
        <Text style={styles.mysteriousGiftText}>Regalo misterioso!</Text>
        <TouchableOpacity
          style={{
            width: 150,
            height: 150,
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={toggleModal}
        >
          <View style={{ width: 110, height: 110 }}>
            <CustomImage name="gift" />
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
        </TouchableOpacity>
        <Text style={styles.openBoxText}>¡Compra la caja misteriosa y averigua que hay dentro!</Text>
        <View style={styles.divider} />
      </View>
      <MysteriousBoxModal isOpen={isOpen} onRequestClose={toggleModal} />
    </>
  )
}

export default MysteriousBox

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 4,
    backgroundColor: colors.primary + '77',
    borderRadius: 10,
    marginTop: 10,
  },
  mysteriousGiftText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  openBoxText: {
    fontSize: 14,
    color: colors.darkGrey,
  },
  image: { width: 100, backgroundColor: 'green', height: 100, borderRadius: 15 },
})
