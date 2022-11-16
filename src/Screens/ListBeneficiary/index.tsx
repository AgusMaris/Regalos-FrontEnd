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

const API = "http://192.168.0.102:3000/getbeneficiary";

const ListBeneficiaryScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [beneficiary, setBeneficiary] = React.useState(null);

  React.useEffect(() => {
    axios.get(API).then((response) => {
      setBeneficiary(response.data);
      console.log(response.data);
    });
  }, []);

  const BeneficiaryListItem = ({ beneficiary }) => (
    <TouchableOpacity style={salesFedStyle.listItem}>
      <Text style={salesFedStyle.listName}>{beneficiary.name}</Text>
      <Text style={salesFedStyle.listName}>{beneficiary.apellido}</Text>
    </TouchableOpacity>
  );

  return (
    <Container>
      <Background1 />
      <View style={{ paddingTop: 110, flex: 1 }}>
        <Text style={salesFedStyle.headerText}>Lista de Beneficiarios</Text>
        <SafeAreaView>
          <FlatList
            data={beneficiary}
            renderItem={({ item }) => (
              <BeneficiaryListItem beneficiary={item} />
            )}
          />
        </SafeAreaView>
      </View>
    </Container>
  );
};

export default ListBeneficiaryScreen;
