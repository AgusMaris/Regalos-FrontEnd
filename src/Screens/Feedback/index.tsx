import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Container } from '../../Components/Container'
import Background2 from '../../Components/Backgrounds/Background2'
import { feedbackStyle } from './style'
import Ionicons from '@expo/vector-icons/Ionicons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigation/RootNavigator'
import axios from 'axios'
import { useAuth } from '../../Components/Providers/AuthProvider'
import Api from '../../Api'

const url = 'http://192.168.1.2:3000/uploadfeedback'
//const url = "http://localhost:3000/uploadfeedback";

type Props = {} & NativeStackScreenProps<RootStackParamList, 'Feedback'>

const FeedbackScreen = ({ navigation, route }: Props) => {
  const { user } = useAuth()
  const { id_regalo } = route.params

  const handleFeedback = async (option: 's' | 'n') => {
    await Api.Gifts.sendGiftFeedback(id_regalo, user!.id, option)
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Background2 />
      <View style={{ marginTop: 250 }}>
        <Text style={feedbackStyle.question}>Te gusto el regalo?</Text>
        <TouchableOpacity style={feedbackStyle.buttonYes} onPress={() => handleFeedback('s')}>
          <Text style={feedbackStyle.text}>
            Si{'   '}
            <Ionicons name="thumbs-up-outline" size={32} color="#fff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={feedbackStyle.buttonNo} onPress={() => handleFeedback('n')}>
          <Text style={feedbackStyle.text}>
            No{'   '}
            <Ionicons name="thumbs-down-outline" size={32} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

export default FeedbackScreen
