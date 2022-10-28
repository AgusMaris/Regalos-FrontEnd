import { StyleSheet } from 'react-native'
import colors from '../../Assets/colors'

export const feedbackStyle = StyleSheet.create({
  buttonYes: {
    borderRadius: 1,
    borderWidth: 2,
    borderColor: colors.lightGrey,
    backgroundColor: "#4BB543",
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    paddingHorizontal: 60,
    paddingVertical: 15,
    marginBottom: 50, 
  },
  buttonNo: {
    borderRadius: 1,
    borderWidth: 2,
    borderColor: colors.lightGrey,
    backgroundColor: "#FC100D",
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    paddingHorizontal: 60,
    paddingVertical: 15,
    marginBottom: 50, 
  },
  question: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 50
  },
  text: {
    textAlign: 'center',
    right: 30,
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
  }
})
