import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { HomeScreenProps } from "./types";
import colors from "../../Assets/colors";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Container } from "../../Components/Container";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

type Props = {
  setAuth: () => void;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const results = {};
  const findRandom = () => {
    navigation.navigate("GiftResults", { score: results });
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: colors.primary,
            marginBottom: 10,

            alignSelf: "center",
            marginTop: 20,
          }}
        >
          Busquemos el Regalo de ... !😉
        </Text>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddBeneficiary")}
          >
            <AntDesign name="adduser" size={35} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: HEIGHT / 2.5,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Questions")}>
          <Image
            source={require("./utils/questionmode.png")}
            style={{ width: 150, height: 150 }}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            findRandom();
          }}
        >
          <Image
            source={require("./utils/fastmode.png")}
            style={{ width: 150, height: 150 }}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
