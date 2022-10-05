import { StyleSheet } from 'react-native'
import colors from '../../Assets/colors'

export const loginStyle = StyleSheet.create({
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
    height: '50%',
    backgroundColor: colors.white,
    margin: 3,
    elevation: 5,
    borderRadius: 10,
  },
  card: {
    borderRadius: 10,
  },
  cardTitle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 1,
  },
  cardButton: {
    backgroundColor: colors.primary,
    margin: 4,
    borderRadius: 20,
  },
  input: {
    margin: 2,
    height: 50,
    backgroundColor: '#C0D1CD',
  },
})
