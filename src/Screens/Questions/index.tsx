import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Container } from '../../Components/Container'
import Background2 from '../../Components/Backgrounds/Background2'
import Questions from './MockedQuestions.json'
import { Question, Result } from '../../schemas/Question'
import colors from '../../Assets/colors'
import { v4 as uuidv4 } from 'uuid'
import { useIsFocused } from '@react-navigation/native'
import { QuestionsScreenProps } from './types'

const questionsData = Questions.data

type QuestionsState = {
  questions: Question[]
  currentQuestion: number
  results: Result[]
}

type QuestionsActions =
  | {
      type: 'previousQuestion'
    }
  | {
      type: 'addResult'
      payload: {
        answerId: string
      }
    }
  | {
      type: 'reset'
    }

const QuestionsReducer = (state: QuestionsState, action: QuestionsActions): QuestionsState => {
  switch (action.type) {
    case 'previousQuestion':
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      }
    case 'addResult':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        results: [...state.results, { ...action.payload, id: uuidv4() }],
      }
    case 'reset':
      return {
        ...state,
        currentQuestion: 0,
        results: [],
      }
    default:
      return state
  }
}

const QuestionsScreen = (props: QuestionsScreenProps) => {
  const fadeAnim = useRef(new Animated.Value(1)).current
  const [state, dispatch] = useReducer(QuestionsReducer, {
    questions: questionsData,
    currentQuestion: 0,
    results: [],
  })
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      dispatch({ type: 'reset' })
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

  const handleNextQuestion = (answerId: string) => {
    fadeOut(() => {
      dispatch({ type: 'addResult', payload: { answerId } })
      fadeIn()
    })
  }

  useEffect(() => {
    console.log(state)
    if (state.currentQuestion === state.questions.length) {
      props.navigation.navigate('GiftResults')
    }
  }, [state.currentQuestion])

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
          {state.questions.length > state.currentQuestion && (
            <Animated.View style={{ opacity: fadeAnim }}>
              <Text style={{ color: colors.primary, fontSize: 30, fontWeight: '900', marginBottom: 50 }}>
                {state.questions[state.currentQuestion].title}
              </Text>
              <View>
                {state.questions[state.currentQuestion].answers.map((answer) => (
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.primary,
                      borderTopEndRadius: 20,
                      borderBottomStartRadius: 20,
                      paddingHorizontal: 50,
                      paddingVertical: 15,
                      marginBottom: 75,
                    }}
                    onPress={() => handleNextQuestion(answer.id)}
                    key={answer.id}
                  >
                    <Text style={{ color: colors.white, fontSize: 20, fontWeight: '700' }}>
                      {answer.text}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </Animated.View>
          )}
        </View>
      </View>
    </Container>
  )
}

export default QuestionsScreen
