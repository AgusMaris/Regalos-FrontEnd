import React from 'react'
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import Background1 from '../../Components/Backgrounds/Background1'
import { Container } from '../../Components/Container'
import { GiftListItem } from './components/GiftListItem'
import { GiftListSkeleton } from './components/GiftListSkeleton'
import useGifts from './hooks/useGifts'
import Ionicons from '@expo/vector-icons/Ionicons'
import { GiftResultsScreenProps } from './types'

const GiftResultsScreen = ({ navigation }: GiftResultsScreenProps) => {
  const { gifts, getGifts } = useGifts()
  const onBackPress = () => {
    navigation.goBack()
  }
  return (
    <Container>
      <Background1 />
      <TouchableOpacity style={{ position: 'absolute', left: 15, top: 40 }} onPress={onBackPress}>
        <Ionicons name="arrow-back-sharp" size={32} color="#fff" />
      </TouchableOpacity>
      <Text
        style={{
          position: 'absolute',
          right: 25,
          color: '#fff',
          fontSize: 32,
          fontWeight: 'bold',
          top: 40,
        }}
      >
        Regalos
      </Text>
      <View style={{ paddingTop: 110, flex: 1 }}>
        {gifts.isLoading ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <GiftListSkeleton />
          </ScrollView>
        ) : (
          <FlatList
            data={gifts.data}
            numColumns={2}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <GiftListItem gift={item} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </Container>
  )
}

export default GiftResultsScreen
