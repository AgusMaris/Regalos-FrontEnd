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
  return (
    <View>
      <View
        style={{
          alignSelf: "center",
        }}
      >
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 30,
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
        }}
      >
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 30,
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
