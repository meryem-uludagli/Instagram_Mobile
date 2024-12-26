import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/commons/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Avatar from '../../components/Avatar/Avatar';

const source =
  'https://i.pinimg.com/736x/54/ec/1e/54ec1e498642894b6c15752658bae14c.jpg';
const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Header screenName={'ProfileScreen'} isMyProfile={true} />

        <View>
          <Avatar image={source} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
