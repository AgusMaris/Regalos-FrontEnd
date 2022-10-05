import { StyleSheet } from "react-native";

export const registerStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#888C87"
    },
    view: {
        width: "80%",
        height: "40%",
        backgroundColor: "#3A3940",
        margin: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10
    },
    card:{
        backgroundColor: "#3A3940",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FA7A44'
    },
    cardTitle: {
        //**backgroundColor: "#888C87",**//
        color: "#FA7A44",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 32,
        margin: 2,
    },
    cardButton:{
        backgroundColor: "#FA7A44",
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