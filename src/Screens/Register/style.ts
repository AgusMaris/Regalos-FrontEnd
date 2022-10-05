import { StyleSheet } from 'react-native'
import colors from '../../Assets/colors'

export const registerStyle = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  view: {
    width: '80%',
    height: '60%',
    backgroundColor: colors.white,
    elevation: 5,
    margin: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  card: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
  },
  cardTitle: {
    //**backgroundColor: "#888C87",**//
    color: colors.primary,

    marginTop: 50,
  },
  cardButton: {
    backgroundColor: colors.primary,
    margin: 3,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    margin: 3,
    height: 50,
    backgroundColor: '#C0D1CD',
  },
})
