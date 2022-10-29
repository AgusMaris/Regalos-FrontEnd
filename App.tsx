import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AuthProvider from './src/Components/Providers/AuthProvider'
import RootNavigator from './src/Navigation/RootNavigator'

if (__DEV__ && typeof global.crypto !== 'object') {
  global.crypto = {
    getRandomValues: (array: any[]) => array.map(() => Math.floor(Math.random() * 256)),
  }
}

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
