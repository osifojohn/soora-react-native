import React from 'react';
import { Icon } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText/AppText';
import colors from '../config/colors';

type CommingSoonContentProps = {
  text1: string;
  text2: string;
};

const CommingSoonContent = ({ text1, text2 }: CommingSoonContentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.commingSoonContainer}>
        <View style={styles.iconContainer}>
          <Icon name="dash" type="octicon" color={colors.black} />
        </View>
        <AppText style={styles.commingSoonText}>Coming Soon</AppText>
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>{text1}</AppText>
        <AppText style={styles.text}>{text2}</AppText>
      </View>
    </View>
  );
};

export default CommingSoonContent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  commingSoonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 35,
  },
  commingSoonText: {
    fontSize: 15,
  },
  iconContainer: {
    width: 25,
    paddingTop: 5,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    textTransform: 'capitalize',
    fontWeight: '900',
    lineHeight: 35,
  },
});
