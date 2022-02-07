import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, Text, Button } from "react-native";
import { ScreenNavigationProp } from "../../Navigator";

interface DetailsProps {}

function DetailsScreen({}: DetailsProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigate("Home")} />
    </View>
  );
}

export default DetailsScreen;
