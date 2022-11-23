import React from 'react'
import { render } from '../test-utils'
import App from '../App'
import { GiftListItem } from '../src/Screens/GiftResults/components/GiftListItem'
import HomeScreen from '../src/Screens/Home'
import WelcomeText from '../src/Screens/Home/components/WelcomeText/WelcomeTest'

//Setup
// include this line for mocking react-native-gesture-handler
// import 'react-native-gesture-handler/jestSetup'

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock')

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {}

//   return Reanimated
// })

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('Prueba', () => {
  it('debería ser true', () => {
    expect(true).toBe(true)
  })
})

describe('<WelcomeText />', () => {
  it('has 1 child', () => {
    const tree = render(<WelcomeText />).toJSON()
    console.log(tree)
    expect(tree.children.length).toBe(1)
  })
  it('renders on HomeScreen', () => {
    const tree = render(
      <HomeScreen
        navigation={{
          addListener: jest.fn(),
        }}
      />
    ).toJSON()
    console.log(tree)
    expect(true).toBe(true)
  })
})
