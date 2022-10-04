import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'

import { Container } from '../../Components/Container'

import { GiftListItem } from './components/GiftListItem'

import { GiftListSkeleton } from './components/GiftListSkeleton'
import useGifts from './hooks/useGifts'

type Props = {
  setAuth: () => void
}

const GiftResultsScreen = (props: Props) => {
  const { gifts, getGifts } = useGifts()
  return (
    <Container>
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
    </Container>
  )
}

export default GiftResultsScreen
