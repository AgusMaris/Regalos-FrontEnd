import { StyleSheet } from 'react-native'
import colors from '../../Assets/colors'

export const feedbackStyle = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 15,
    marginBottom: 75,
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 50 
  }
})
