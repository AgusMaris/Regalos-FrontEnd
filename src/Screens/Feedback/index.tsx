import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Container } from "../../Components/Container";
import Background2 from "../../Components/Backgrounds/Background2";
import { feedbackStyle } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/RootNavigator";
import axios from "axios";
import { useAuth } from "../../Components/Providers/AuthProvider";

const url = "http://192.168.1.2:3000/uploadfeedback";
//const url = "http://localhost:3000/uploadfeedback";
const id_regalo = 42;
const id_usuario = 1;

type Props = {} & NativeStackScreenProps<RootStackParamList, "Feedback">;

const FeedbackScreen = ({ navigation, route }: Props) => {
	const { user } = useAuth();
  const { id_regalo } = route;
	const handleLike = async () => {
		try {
			const resp = await axios.post(url, {
				id_regalo: id_regalo,
				id_usuario: user.id,
				calificacion: "s",
			});
      console.log(user.id)
			console.log("Estas en axios!", resp.data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDislike = async () => {
		try {
			const resp = await axios.post(url, {
				id_regalo: id_regalo,
				id_usuario: user,
				calificacion: "n",
			});
			console.log("Estas en axios!", resp.data);
		} catch (error) {
			console.error(error);
		}
		//navigation.goBack();
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
