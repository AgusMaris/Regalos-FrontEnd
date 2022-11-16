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
import AddBeneficiaryScreen from '../Screens/AddBeneficiary'
import BeneficiaryScreen from '../Screens/Beneficiary'
import ListBeneficiaryScreen from '../Screens/ListBeneficiary'
import { Beneficiary } from '../schemas/Beneficiary'
import StatsScreen from '../Screens/Stats'
import UploadProductScreen from '../Screens/UploadProduct'

type Props = {}
export type RootStackParamList = {
  Beneficiary: undefined
  Home: {
    beneficiary?: Beneficiary
  }
  Login: undefined
  Register: undefined

  GiftResults: {
    score: { [tag: string]: number }
  }
  AddBeneficiary: undefined
  ListBeneficiary: undefined
  Questions: undefined
  Feedback: {
    id_regalo: string
  }
  Stats: undefined
  UploadProduct: undefined
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
            {user.isAdmin ? (
              <RootStack.Screen name="Stats" component={StatsScreen} options={{ headerShown: false }} />
            ) : (
              <>
                <RootStack.Screen
                  name="Beneficiary"
                  component={BeneficiaryScreen}
                  options={{
                    headerTitleAlign: 'center',
                    title: 'Bienvenido',
                    headerStyle: {
                      backgroundColor: colors.primary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize: 30,
                    },
                  }}
                />
                <RootStack.Screen
                  name="Home"
                  options={{
                    headerTitleAlign: 'center',
                    title: 'Bienvenido',
                    headerStyle: {
                      backgroundColor: colors.primary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize: 30,
                    },
                  }}
                  component={HomeScreen}
                />
                <RootStack.Screen
                  name="SalesFeedback"
                  component={SalesFeedbackScreen}
                  options={{ headerShown: false }}
                />
                <RootStack.Screen
                  name="Questions"
                  component={QuestionsScreen}
                  options={{ headerShown: false }}
                />
                <RootStack.Screen
                  name="Feedback"
                  component={FeedbackScreen}
                  options={{ headerShown: false }}
                />
                <RootStack.Screen
                  name="GiftResults"
                  options={{
                    headerShown: false,
                  }}
                  component={GiftResultsScreen}
                />
            <RootStack.Screen name="UploadProduct" options={{headerShown: false}} component={UploadProductScreen} />
                <RootStack.Screen
                  name="AddBeneficiary"
                  options={{ headerShown: false }}
                  component={AddBeneficiaryScreen}
                />
                <RootStack.Screen
                  name="ListBeneficiary"
                  options={{ headerShown: false }}
                  component={ListBeneficiaryScreen}
                />
              </>
            )}
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
              component={RegisterScreen}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
