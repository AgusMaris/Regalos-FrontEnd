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
    name: "Nicolas",
    apellido: "Vidal",
  },
  {
    id: 2,
    name: "Nicas",
    apellido: "Vdal",
  },
];

const Item = ({ name, apellido }) => (
  <TouchableOpacity style={salesFedStyle.listItem}>
    <Text style={salesFedStyle.listName}>{name}</Text>
    <Text style={salesFedStyle.listName}>{apellido}</Text>
  </TouchableOpacity>
);

const ListBeneficiaryScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const renderItem = ({ item }) => (
    <Item name={item.name} apellido={item.apellido} />
  );

  return (
    <Container>
      <Background1 />
      <View style={{ paddingTop: 110, flex: 1 }}>
        <Text style={salesFedStyle.headerText}>Listado de productos</Text>
        <SafeAreaView>
          <FlatList
            data={DATA}
            keyExtractor={({ id }, index) => id}
            renderItem={renderItem}
          />
        </SafeAreaView>
      </View>
    </Container>
  );
};
export default ListBeneficiaryScreen;
