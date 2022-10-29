import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Background1 from "../../Components/Backgrounds/Background1";
import { Container } from "../../Components/Container";
import { GiftListItem } from "./components/GiftListItem";
import { GiftListSkeleton } from "./components/GiftListSkeleton";
import useGifts from "./hooks/useGifts";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GiftResultsScreenProps } from "./types";
import MysteriousBox from "./components/MysteriousBox";
import { Button } from "../../Components/Buttons";

const GiftResultsScreen = ({ navigation, route: { params } }: GiftResultsScreenProps) => {
  const { gifts, getGifts, cambiarLimites } = useGifts(params.score);
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <Background1 />
      <TouchableOpacity
        style={{ position: "absolute", left: 15, top: 40 }}
        onPress={onBackPress}
      >
        <Ionicons name="arrow-back-sharp" size={32} color="#fff" />
      </TouchableOpacity>
      <Text
        style={{
          position: "absolute",
          right: 25,
          color: "#fff",
          fontSize: 32,
          fontWeight: "bold",
          top: 40,
        }}
      >
        Regalos
      </Text>
      <View style={{ paddingTop: 110, flex: 1 }}>
        {gifts.isLoading ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <GiftListSkeleton />
          </ScrollView>
        ) : (
          <>
            <FlatList
              ListFooterComponent={
                <View>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      fontWeight: "700",
                      padding: 10,
                      textAlign: "center",
                    }}
                  ></Text>
                  <Button 
                  onPress={cambiarLimites}
                  text="Ver mas resultados"
                  />
                 </View>
              }
              data={gifts.data}
              numColumns={1}
              keyExtractor={(item) => item.name}
              ListHeaderComponent={<MysteriousBox />}
              renderItem={({ item }) => <GiftListItem gift={item} />}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </View>
    </Container>
  );
};

export default GiftResultsScreen;
