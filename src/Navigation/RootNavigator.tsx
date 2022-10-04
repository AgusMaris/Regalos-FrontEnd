import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/Home'
import LoginScreen from '../Screens/Login'
import RegisterScreen from '../Screens/Register'
import GiftResultsScreen from '../Screens/GiftResults'

type Props = {}

const RootStack = createNativeStackNavigator()

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
            <RootStack.Screen
              name="Login"
              component={(props) => <LoginScreen {...props} setAuth={toggleAuth} />}
            />
            <RootStack.Screen
              name="Register"
              component={(props) => <RegisterScreen {...props} setAuth={toggleAuth} />}
            />
            <RootStack.Screen
              name="GiftResults"
              component={(props) => <GiftResultsScreen {...props} setAuth={toggleAuth} />}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
