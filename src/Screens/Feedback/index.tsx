import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Container } from "../../Components/Container";
import Background2 from "../../Components/Backgrounds/Background2";
import { feedbackStyle } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
type Props = {
	setAuth: () => void;
};

const url = "http://localhost:3000/uploadfeedback";

const FeedbackScreen = ({ navigation }: Props) => {
	const [id_usuario, setUsuario] = useState("");
	const [id_regalo, setRegalo] = useState("");
	const [calificacion, setCalificacion] = useState("");

	const handleLike = () => {
		navigation.navigate("Home");
		console.log("s");
	};
	const handleDislike = () => {
		navigation.navigate("Home");
		console.log("n");
	};

	return (
		<Container>
			<Background2 />
			<View style={{ marginTop: 250 }}>
				<Text style={feedbackStyle.question}>Te gusto el regalo?</Text>
				<TouchableOpacity style={feedbackStyle.buttonYes} onPress={handleLike}>
					<Text style={feedbackStyle.text}>
						Si{"   "}
						<Ionicons name="thumbs-up-outline" size={32} color="#fff" />
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={feedbackStyle.buttonNo}
					onPress={handleDislike}
				>
					<Text style={feedbackStyle.text}>
						No{"   "}
						<Ionicons name="thumbs-down-outline" size={32} color="#fff" />
					</Text>
				</TouchableOpacity>
			</View>
		</Container>
	);
};

export default FeedbackScreen;
