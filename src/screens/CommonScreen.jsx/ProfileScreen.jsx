import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/commons/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Header screenName={'ProfileScreen'} isMyProfile={true} />
        <Text>ProfileScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
