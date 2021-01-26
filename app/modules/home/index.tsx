import React from "react";
import { StyleSheet, View } from "react-native";
import { registerScreen, ScreenComponent } from "navigation/utils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "stores/rootReducer";
import { Text, Button } from "react-native-elements";

import { actions } from "../commons/setting/setting.slice";

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
  const dispatch = useDispatch();
  const setting = useSelector((state: RootState) => state.setting);

  return (
    <View style={styles.container}>
      <Text>{setting.name}</Text>
      <Button
        title="Update"
        onPress={() => {
          dispatch(actions.updateName("Tuan Anh Le"));
        }}
      />
    </View>
  );
};

export default registerScreen<HomeParam, "Home">("Home", Home);
