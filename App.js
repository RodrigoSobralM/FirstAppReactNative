import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./src/screens/Header/Header";
import TelaInicial from "./src/screens/TelaInicial/TelaInicial";
import TelaTransacao from "./src/screens/TelaTrasacao/TelaTransacao";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

import {
  Raleway_100Thin,
  Raleway_200ExtraLight,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight_Italic,
  Raleway_300Light_Italic,
  Raleway_400Regular_Italic,
  Raleway_500Medium_Italic,
  Raleway_600SemiBold_Italic,
  Raleway_700Bold_Italic,
  Raleway_800ExtraBold_Italic,
  Raleway_900Black_Italic,
} from "@expo-google-fonts/raleway";

const Stack = createNativeStackNavigator();

function App() {
  // Adicione os parênteses aqui
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_100Thin,
          Poppins_100Thin_Italic,
          Poppins_200ExtraLight,
          Poppins_200ExtraLight_Italic,
          Poppins_300Light,
          Poppins_300Light_Italic,
          Poppins_400Regular,
          Poppins_400Regular_Italic,
          Poppins_500Medium,
          Poppins_500Medium_Italic,
          Poppins_600SemiBold,
          Poppins_600SemiBold_Italic,
          Poppins_700Bold,
          Poppins_700Bold_Italic,
          Poppins_800ExtraBold,
          Poppins_800ExtraBold_Italic,
          Poppins_900Black,
          Poppins_900Black_Italic,
          Raleway_100Thin,
          Raleway_200ExtraLight,
          Raleway_300Light,
          Raleway_400Regular,
          Raleway_500Medium,
          Raleway_600SemiBold,
          Raleway_700Bold,
          Raleway_800ExtraBold,
          Raleway_900Black,
          Raleway_100Thin_Italic,
          Raleway_200ExtraLight_Italic,
          Raleway_300Light_Italic,
          Raleway_400Regular_Italic,
          Raleway_500Medium_Italic,
          Raleway_600SemiBold_Italic,
          Raleway_700Bold_Italic,
          Raleway_800ExtraBold_Italic,
          Raleway_900Black_Italic,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaInicial">
          <Stack.Screen
            name="TelaInicial"
            component={TelaInicial}
            options={{ headerTitle: (props) => <Header {...props} /> }}
          />
          <Stack.Screen
            name="TelaTransacao"
            component={TelaTransacao}
            options={{
              headerTitle: (props) => <Header {...props} />,
              headerBackVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
