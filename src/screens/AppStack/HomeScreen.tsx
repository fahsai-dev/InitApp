import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text
} from "../../components";

const HomeScreen = ({ }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Text>This is top home.</Text>
      <Text>This is bottom home.</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;