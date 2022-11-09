import { StyleSheet } from 'react-native'
import colors from '../../Assets/colors'

export const salesFedStyle = StyleSheet.create({
  headerText: { textAlign: "center", fontWeight: "bold"},
  listItem: {
    borderRadius: 10,
    backgroundColor: "#ddd",
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
  },
  listImg: {
    flex: 0.5,
    textAlign: "center",
    alignItems: "flex-start",
  },
  listName: {
    flex: 0.5,
    textAlign: "center",
    alignItems: "flex-start",
  },
  listFed: {
    flex: 0.5,
    textAlign: "center",
    alignItems: "flex-start",
  }
})
