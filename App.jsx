import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import RootNavigator from './src/routes/RootNavigator';

const App = () => {
  return (
    <SafeAreaView>
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
