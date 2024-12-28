import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import {storyList} from '../../constants/dummyData';

const SavedIGStories = () => {
  return (
    <View style={styles.savedIGStories}>
      <FlatList
        data={storyList}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => (
          <View style={styles.box}>
            <Avatar image={item.storyImg} isSaved={true} />
            <Text style={styles.storyText}>{item.storyDesc}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 18}} />}
      />
    </View>
  );
};

export default SavedIGStories;

const styles = StyleSheet.create({
  savedIGStories: {
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  storyText: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 14,
    letterSpacing: -0.4,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    marginVertical: 4,
  },
});
