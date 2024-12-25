import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

export const titleTypes = {
  TEXT_12_400_18: 'TEXT_12_400_18',
  TEXT_16_700: 'TEXT_16_700',
  TEXT_22_700_40: 'TEXT_22_700_40:',
};

const Title = ({theme = 'default', text}) => {
  return <Text style={styles[theme]}>{text}</Text>;
};

export default Title;

const styles = {
  TEXT_12_400_18: StyleSheet.create({
    color: colors.WHITE,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  }),

  TEXT_16_700: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '700',
  }),

  TEXT_22_700_40: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 40,
  }),
};
