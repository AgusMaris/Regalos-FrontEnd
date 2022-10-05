import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/Home'
import LoginScreen from '../Screens/Login'
import RegisterScreen from '../Screens/Register'
import GiftResultsScreen from '../Screens/GiftResults'
import QuestionsScreen from '../Screens/Questions'

type Props = {}

export type RootStackParamList = {
  Home: undefined
  Login: undefined
  Register: undefined
  GiftResults: undefined
  Questions: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator({}: Props) {
  const [auth, setAuth] = useState(false)

  const toggleAuth = () => {
    setAuth(!auth)
  }
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {auth ? (
          <RootStack.Screen
            name="Home"
            component={(props) => <HomeScreen {...props} setAuth={toggleAuth} />}
          />
        ) : (
          <>
            <RootStack.Screen name="Questions" component={QuestionsScreen} options={{ headerShown: false }} />
            <RootStack.Screen
              name="GiftResults"
              options={{
                headerShown: false,
              }}
              component={GiftResultsScreen}
            />
            <RootStack.Screen
              name="Login"
              component={(props) => <LoginScreen {...props} setAuth={toggleAuth} />}
            />

            <RootStack.Screen
              name="Register"
              component={(props) => <RegisterScreen {...props} setAuth={toggleAuth} />}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
