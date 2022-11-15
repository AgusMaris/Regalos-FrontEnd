import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import { BeneficiaryStyle } from "./style";
import colors from "../../Assets/colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

type Props = {
  setAuth: () => void;
};

const BeneficiaryScreen = () => {
  const _onAddBeneficiaryPressed = () => {
    navigation.navigate("AddBeneficiary");
  };

  const _onListBeneficiaryPressed = () => {
    navigation.navigate("ListBeneficiary");
  };

  return (
    <View>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          height: HEIGHT / 1.9,
        }}
      >
        <TouchableOpacity
          onPress={_onAddBeneficiaryPressed}
          style={{ flexDirection: "row" }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              textAlignVertical: "center",
              alignContent: "center",
            }}
          >
            Agregar Beneficiario
          </Text>

          <AntDesign name="adduser" size={35} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={_onListBeneficiaryPressed}
          style={{ flexDirection: "row" }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              textAlignVertical: "center",
              alignContent: "center",
            }}
          >
            Lista de Beneficiarios
          </Text>

          <AntDesign name="contacts" size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BeneficiaryScreen;
