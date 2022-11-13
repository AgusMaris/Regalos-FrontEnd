import {
	FlatList,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	View,
	Text,
	ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Background1 from "../../Components/Backgrounds/Background1";
import { Container } from "../../Components/Container";
import { salesFedStyle } from "./style";
import axios from "axios";

const Item = ({ name, goodfeedback, badfeedback }) => (
	<TouchableOpacity style={salesFedStyle.listItem}>
		<Text style={salesFedStyle.listName}>{name}</Text>
		<Text
			style={{
				backgroundColor: "#4BB543",
				flex: 0.2,
				textAlign: "center",
				alignItems: "flex-start",
				borderTopLeftRadius: 10,
				borderBottomLeftRadius: 10,
				color: "#fff",
				fontWeight: "bold",
				padding: 10,
				fontSize: 18,
			}}
		>
			{goodfeedback}
		</Text>
		<Text
			style={{
				backgroundColor: "#FC100D",
				flex: 0.2,
				textAlign: "center",
				alignItems: "flex-start",
				borderTopRightRadius: 10,
				borderBottomRightRadius: 10,
				color: "#fff",
				fontWeight: "bold",
				padding: 10,
				fontSize: 18,
			}}
		>
			{badfeedback}
		</Text>
	</TouchableOpacity>
);

const SalesFeedbackScreen = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	React.useEffect(() => {
		sendRequest();
		console.log("Estas en useEffect!");
	}, []);

	const sendRequest = async () => {
		try {
			const { data } = await axios.get("http://localhost:3000/getvendor", {
				headers: {
					"Content-Type": "application/json",
				},
			});
			setData(data);
			console.log("Estas en axios!", data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const renderItem = ({ item }) => (
		<Item
			name={item.name}
			goodfeedback={item.feedback.positive}
			badfeedback={item.feedback.negative}
		/>
	);

	return (
		<Container>
			<Background1 />
			<View style={{ paddingTop: 110, flex: 1 }}>
				<Text style={salesFedStyle.headerText}>Listado de tus productos</Text>
				<SafeAreaView>
					<FlatList
						data={data}
						keyExtractor={({ id }, index) => id}
						renderItem={renderItem}
					/>
				</SafeAreaView>
			</View>
		</Container>
	);
};
export default SalesFeedbackScreen;
