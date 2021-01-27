import React from "react";
import { StyleSheet, View } from "react-native";
import { registerScreen, ScreenComponent } from "navigation/utils";
import { useSelector } from "react-redux";
import { RootState } from "stores/rootReducer";
import { Text } from "react-native-elements";

const Name = "Home";

export type HomeParam = {
  [Name]: {};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Home: ScreenComponent<HomeParam, "Home"> = () => {
  const setting = useSelector((state: RootState) => state.setting);

  return (
    <View style={styles.container}>
      <Text>{setting.name}</Text>
    </View>
  );
};

export default registerScreen<HomeParam, "Home">("Home", Home);
