import { SafeAreaView, View } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { addBeneficiaryStyle } from "./style";
import colors from "../../Assets/colors";

type Props = {
  setAuth: () => void;
};

const AddBeneficiaryScreen = () => {
  return (
    <SafeAreaView style={addBeneficiaryStyle.content}>
      <View style={addBeneficiaryStyle.view}>
        <Card.Content style={{ flex: 1, justifyContent: "space-around" }}>
          <Card.Title
            title="Agregar beneficiario"
            titleStyle={addBeneficiaryStyle.cardTitle}
          ></Card.Title>
          <TextInput
            label="Nombre"
            returnKeyType="next"
            autoCapitalize="none"
            style={addBeneficiaryStyle.input}
            activeUnderlineColor={colors.primary}
          />
          <TextInput
            label="Apellido"
            returnKeyType="done"
            style={addBeneficiaryStyle.input}
            activeUnderlineColor={colors.primary}
          />
          <Button mode="contained" style={addBeneficiaryStyle.cardButton}>
            Guardar
          </Button>
        </Card.Content>
      </View>
    </SafeAreaView>
  );
};

export default AddBeneficiaryScreen;
