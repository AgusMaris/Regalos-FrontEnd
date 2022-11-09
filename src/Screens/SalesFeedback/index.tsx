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


const Item = ({ name, feedback }) => (
	<TouchableOpacity style={salesFedStyle.listItem}>
		<Text style={salesFedStyle.listName}>{name}</Text>
		<Text style={salesFedStyle.listFed}>{feedback}</Text>
	</TouchableOpacity>
);

const SalesFeedbackScreen = () => {
	
	const renderItem = ({ item }) => (
		<Item name={item.name} feedback={item.feedback} />
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
