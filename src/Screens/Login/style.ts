import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#888C87",
    },
    view: {
        width: "80%",
        height: "70%",
        backgroundColor: "#3A3940",
        margin: 3,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10
    },
    card: {
        backgroundColor: "#3A3940",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FA7A44'
    },
    cardTitle: {
        color: "#FA7A44",
        fontWeight: "bold",
        fontSize:24,
        margin: 1,
    },
    cardButton: {
        backgroundColor: "#FA7A44",
        margin: 4,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20
    },
    input: {
        /* no encuentro como cambiar el color violeta
        selectionColor: "#FA7A44",
        underlineColor: "#FA7A44",
        activeUnderlineColor: "#FA7A44",
        outlineColor: "#FA7A44",
        activeOutlineColor: "#FA7A44",
        */
        margin: 2,
        height: 50,
        backgroundColor: '#C0D1CD', 
    },
})