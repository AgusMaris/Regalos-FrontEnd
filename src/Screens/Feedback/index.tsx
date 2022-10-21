import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Container } from "../../Components/Container";
import Background2 from "../../Components/Backgrounds/Background2";
import { feedbackStyle } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
	setAuth: () => void;
};

const FeedbackScreen = ({ navigation }: Props) => {
	const handleLike = () => {
		console.log("like");
		navigation.navigate("Home");
		//TODO
	};

	const handleDislike = () => {
		console.log("dislike");
		navigation.navigate("Home");
		//TODO
	};

	return (
		<Container>
			<Background2 />
			<View style={{ marginTop: 250 }}>
				<Text style={feedbackStyle.text}>Te gusto el regalo?</Text>
				<TouchableOpacity
					style={feedbackStyle.button}
					onPress={() => handleLike()}
				>
					Si
					<Ionicons name="thumbs-up-outline" size={32} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity
					style={feedbackStyle.button}
					onPress={() => handleDislike()}
				>
					No
					<Ionicons name="thumbs-down-outline" size={32} color="#fff" />
				</TouchableOpacity>
			</View>
		</Container>
	);
};

export default FeedbackScreen;
