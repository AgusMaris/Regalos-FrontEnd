import { StyleSheet } from 'react-native'
import colors from '../../Assets/colors'

export const salesFedStyle = StyleSheet.create({
  headerText: { textAlign: "center", fontWeight: "bold", fontSize: 28, paddingTop: 20, paddingBottom: 20, color: colors.primary,},
  listItem: {
    borderRadius: 10,
    backgroundColor: "#ddd",
    flexDirection: "row",
    marginVertical: 10,
  },
  listImg: {
    flex: 0.5,
    textAlign: "center",
    alignItems: "flex-start",
  },
  listName: {
    fontSize: 18,
    flex: 0.6,
    alignItems: "flex-start",
    padding: 10,
  },
  listFed: {
    flex: 0.5,
    textAlign: "center",
    alignItems: "flex-start",
  }
})
