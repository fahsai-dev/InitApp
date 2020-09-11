import 'react-native-gesture-handler';
import React, { useEffect, useContext, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {
  LoginScreen,
} from "./screens/AuthStack";
import {
  HomeScreen
} from './screens/AppStack'

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

const AppNavigator = () => {
  const [accessToken, setAccessToken] = useState(true);

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
      </SafeAreaProvider>
    </>
  );
};

export default AppNavigator;