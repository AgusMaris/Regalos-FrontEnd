import React, { useState } from 'react'
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/Home'
import LoginScreen from '../Screens/Login'
import RegisterScreen from '../Screens/Register'
import GiftResultsScreen from '../Screens/GiftResults'
import QuestionsScreen from '../Screens/Questions'
import { useAuth } from '../Components/Providers/AuthProvider'
import colors from '../Assets/colors'
import FeedbackScreen from '../Screens/Feedback'
import SalesFeedbackScreen from '../Screens/SalesFeedback'

type Props = {}
export type RootStackParamList = {
  Home: undefined
  Login: undefined
  Register: undefined
  GiftResults: {
    score: { [tag: string]: number }
  }
 
  Questions: undefined
  Feedback: undefined
  SalesFeedback: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

LogBox.ignoreAllLogs()
export default function RootNavigator({}: Props) {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {user ? (
          <>
          <RootStack.Screen
              name="Home"
              options={{
                headerTitleAlign:'center',
                title: 'Bienvenido',
                headerStyle: {
                  backgroundColor: colors.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30
                },
              }}
              component={HomeScreen}
            />
            <RootStack.Screen name="SalesFeedback" component={SalesFeedbackScreen} options={{ headerShown: false }} />
            <RootStack.Screen name="Questions" component={QuestionsScreen} options={{ headerShown: false }} />
            <RootStack.Screen name="Feedback" component={FeedbackScreen} options={{ headerShown: false }} />
            <RootStack.Screen
              name="GiftResults"
              options={{
                headerShown: false,
              }}
              component={GiftResultsScreen}
            />
          </>
        ) : (
          <>
            <RootStack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
              component={LoginScreen}
            />
            <RootStack.Screen
              name="Register"
              options={{
                headerShown: false,
              }}
              component={(props) => <RegisterScreen {...props} setAuth={toggleAuth} />}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
