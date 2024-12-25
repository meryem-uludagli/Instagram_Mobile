import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/commons/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {routes} from '../../constants/routes';

const FeedPostsScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Header screenName={routes.FEED_POSTS_SCREEN} />
        <Text>FeedPostsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default FeedPostsScreen;
