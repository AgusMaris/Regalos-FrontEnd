import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Container } from '../../Components/Container'
import Background2 from '../../Components/Backgrounds/Background2'
import colors from '../../Assets/colors'
import { useIsFocused } from '@react-navigation/native'
import { QuestionsScreenProps } from './types'
import useQuestions from './hooks/useQuestions'
import { Answer } from '../../schemas/Question'
import AnimatedLottieView from 'lottie-react-native'

const QuestionsScreen = (props: QuestionsScreenProps) => {
  const fadeAnim = useRef(new Animated.Value(1)).current

  const { currentQuestion, questions, isLoading, results, addResult, resetQuestions } = useQuestions()

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      resetQuestions()
    }
  }, [isFocused])

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 175,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = (cb?: () => void) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 175,
      useNativeDriver: true,
    }).start(() => {
      cb?.()
    })
  }

  const handleNextQuestion = (answer: Answer) => {
    fadeOut(() => {
      addResult(answer.type === 'affirmative' ? questions![currentQuestion].tags : [])
      fadeIn()
    })
  }

  useEffect(() => {
    if (currentQuestion === questions!.length && questions!.length > 0) {
      props.navigation.navigate('GiftResults', { score: results })
    }
  }, [currentQuestion])

  return (
    <Container>
      <Background2 />
      <View>
        <Text
          style={{
            position: 'absolute',
            right: 30,
            color: colors.white,
            top: 10,
            fontSize: 32,
            fontWeight: 'bold',
          }}
        >
          Questions
        </Text>
        <View style={{ marginTop: 250 }}>
          {isLoading ? (
            <View style={{ width: 250, height: 250, alignSelf: 'center' }}>
              <AnimatedLottieView source={require('../../Assets/animations/loader.json')} autoPlay />
            </View>
          ) : (
            questions!.length > currentQuestion && (
              <Animated.View style={{ opacity: fadeAnim }}>
                <Text style={{ color: colors.primary, fontSize: 30, fontWeight: '900', marginBottom: 50 }}>
                  {questions![currentQuestion].title}
                </Text>
                <View>
                  {questions![currentQuestion].answers.map((answer) => (
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.primary,
                        borderTopEndRadius: 20,
                        borderBottomStartRadius: 20,
                        paddingHorizontal: 50,
                        paddingVertical: 15,
                        marginBottom: 75,
                      }}
                      onPress={() => handleNextQuestion(answer)}
                      key={answer.id}
                    >
                      <Text style={{ color: colors.white, fontSize: 20, fontWeight: '700' }}>
                        {answer.text}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </Animated.View>
            )
          )}
        </View>
      </View>
    </Container>
  )
}

export default QuestionsScreen
