import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text
} from "../../components";

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Text>Login This is top.</Text>
      <Text>Login This is bottom.</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;