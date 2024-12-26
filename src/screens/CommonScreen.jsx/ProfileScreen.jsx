import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../../components/commons/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Avatar from '../../components/Avatar/Avatar';
import ProfileData from '../../components/ProfileFlow/ProfileData';
import {colors} from '../../constants/colors';

const source =
  'https://i.pinimg.com/736x/54/ec/1e/54ec1e498642894b6c15752658bae14c.jpg';
const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Header screenName={'ProfileScreen'} isMyProfile={true} />

        <View style={styles.userProfileData}>
          <Avatar image={source} />

          <View style={styles.data}>
            <ProfileData value={'1,587'} title={'Posts'} />
            <ProfileData value={'9,056'} title={'Followers'} />
            <ProfileData value={'7,683'} title={'Following'} />
          </View>
        </View>

        <View style={styles.userNameAndInfo}>
          <View>
            <Text style={styles.userName}>Username</Text>
            <Text style={styles.category}>Category/Genre text</Text>
            <Text style={styles.describtion}>
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </Text>
            <Text style={styles.link}>Link goes here</Text>
          </View>

          <View style={styles.followers}>
            <View style={styles.friends}>
              <Image source={{uri: source}} style={styles.friendsImage} />
              <Image
                source={{uri: source}}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 100,
                  borderWidth: 1.5,
                  borderColor: colors.WHITE,
                  position: 'absolute',
                  left: 13,
                  zIndex: -1,
                }}
              />
              <Image
                source={{uri: source}}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 100,
                  borderWidth: 1.5,
                  borderColor: colors.WHITE,
                  position: 'absolute',
                  left: 26,
                  zIndex: -2,
                }}
              />
            </View>

            <View style={styles.followersRight}>
              <Text style={styles.followed}> Followed by </Text>
              <Text style={styles.boldfollowed}> usurname </Text>
              <Text style={styles.boldfollowed}> usurname </Text>
              <Text style={styles.followed}> and </Text>
              <Text style={styles.boldfollowed}> 100 others </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userProfileData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  data: {
    flexDirection: 'row',
    gap: 24,
  },

  userNameAndInfo: {
    paddingTop: 6,
    paddingHorizontal: 12,
    paddingBottom: 10,
    gap: 12,
  },
  userName: {
    color: colors.BLACK,
    fontSize: 13,
    fontWeight: '700',
  },
  category: {
    color: colors.NEUTRAL,
    fontSize: 13,
    fontWeight: '400',
  },
  describtion: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  },
  link: {
    color: colors.DARK_BLUE,
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 16,
  },
  friends: {
    flexDirection: 'row',
    width: 54,
  },

  friendsImage: {
    width: 26,
    height: 26,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: colors.WHITE,
    position: 'absolute',
    zIndex: 1,
  },
  followers: {
    paddingBottom: 4,
    flexDirection: 'row',
    gap: 12,
  },
  followed: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
  },
  boldfollowed: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 16,
  },
  followersRight: {
    flexDirection: 'row',
  },
});
