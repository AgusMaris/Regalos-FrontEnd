import {
	FlatList,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	View,
	Text,
} from "react-native";
import React, { useState } from "react";
import Background1 from "../../Components/Backgrounds/Background1";
import { Container } from "../../Components/Container";
import { salesFedStyle } from "./style";

const DATA = [
	{
		name: "pelota dasd a asd",
		goodfeedback: "46",
		badfeedback: "1",
	},
	{
		name: "papel",
		goodfeedback: "29",
		badfeedback: "0",
	},
	{
		name: "mouse",
		goodfeedback: "20",
		badfeedback: "2",
	},
	{
		name: "teclado",
		goodfeedback: "22",
		badfeedback: "9",
	},
	{
		name: "telefono",
		goodfeedback: "12",
		badfeedback: "0",
	},
	{
		name: "perfume",
		goodfeedback: "35",
		badfeedback: "3",
	},
	{
		name: "monitor",
		goodfeedback: "28",
		badfeedback: "17",
	},
	{
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
				<ScrollView showsVerticalScrollIndicator={false}>
					<SafeAreaView>
						<FlatList
							data={DATA}
							renderItem={renderItem}
							keyExtractor={(item) => item.id}
						/>
					</SafeAreaView>
				</ScrollView>
			</View>
		</Container>
	);
};
export default SalesFeedbackScreen;
