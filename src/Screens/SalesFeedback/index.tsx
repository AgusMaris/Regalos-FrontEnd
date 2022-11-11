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

const DATA = [
	{
		id: 1,
		name: "pelota dasd a asd",
		goodfeedback: "46",
		badfeedback: "1",
	},
	{
		id: 2,
		name: "papel",
		goodfeedback: "29",
		badfeedback: "0",
	},
	{
		id: 3,
		name: "mouse",
		goodfeedback: "20",
		badfeedback: "2",
	},
	{
		id: 4,
		name: "teclado",
		goodfeedback: "22",
		badfeedback: "9",
	},
	{
		id: 5,
		name: "telefono",
		goodfeedback: "12",
		badfeedback: "0",
	},
	{
		id: 6,
		name: "perfume",
		goodfeedback: "35",
		badfeedback: "3",
	},
	{
		id: 7,
		name: "monitor",
		goodfeedback: "28",
		badfeedback: "17",
	},
	{
		id: 8,
		name: "teclado",
		goodfeedback: "5",
		badfeedback: "23",
	},
];

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
			console.log(data);
			console.log("Estas en axios!");
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};


	const renderItem = ({ item }) => (
		<Item
			name={item.name}
			goodfeedback={item.goodfeedback}
			badfeedback={item.badfeedback}
		/>
	);

	return (
		<Container>
			<Background1 />
			<View style={{ paddingTop: 110, flex: 1 }}>
				<Text style={salesFedStyle.headerText}>Listado de productos</Text>
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
