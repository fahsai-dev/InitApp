import React, { useEffect, useContext, useState } from "react";
import { observer } from 'mobx-react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  LoadingIndicator
} from "./components";
import {
  LoginScreen,
} from "./screens/AuthStack";
import {
  HomeScreen
} from './screens/AppStack';
import {
  LoadingContext
} from './contexts';

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

// APP FLOW
const AppStack = createBottomTabNavigator();
function AppStackScreen() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="HomeTab" component={HomeStackScreen} />
      <AppStack.Screen name="SettingsTab" component={HomeStackScreen} />
    </AppStack.Navigator>
  );
}
// AUTH FLOW
const AuthenStack = createStackNavigator();
const AuthenStackScreen = () => (
  <AuthenStack.Navigator headerMode="none">
    <AuthenStack.Screen name="Login" component={LoginScreen} />
  </AuthenStack.Navigator>
);

const AppNavigator = observer(() => {
  const loadingContext = useContext(LoadingContext);
  const [accessToken, setAccessToken] = useState(true);

  // Fetch the token from storage then navigate to our appropriate place
  const bootstrapAsync = async () => {
    try {
      loadingContext.loading = true;
      let userToken = await AsyncStorage.getItem('accessToken');
      // setAccessToken(userToken);
      setTimeout(() => {
        loadingContext.loading = false;
      }, 3000);
    } catch (e) {
      console.log(`bootstrapAsync: ${e}`);
    }
  };
  useEffect(() => {
    bootstrapAsync()
  }, []);

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          {
            accessToken
              ? <AppStackScreen />
              : <AuthenStackScreen />
          }
        </NavigationContainer>

        <LoadingIndicator />

      </SafeAreaProvider>
    </>
  );
});

export default AppNavigator;