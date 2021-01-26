import React from "react";
import { StatusBar } from "react-native";
import { enableScreens } from "react-native-screens";
import RNSplashScreen from "react-native-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "navigation/navigator/AppNavigator";
import "translations/initi18next";
import AppTheme, { Colors } from "styles";
import { Provider } from "react-redux";
import store from "stores";

//* required to improvement native screens
enableScreens();

//* check init intl
if (!global.Intl) {
  require("intl");
  require("intl/locale-data/jsonp/vi-VN.js");
}

const App = () => {
  React.useEffect(() => {
    RNSplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={Colors.White}
      />
      <Provider store={store}>
        <AppTheme>
          <AppNavigator />
        </AppTheme>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
