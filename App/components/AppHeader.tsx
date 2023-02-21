import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText/AppText';
import colors from '../config/colors';
import AppButton from './AppButton';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <AppText style={styles.icon}>O</AppText>
        <AppText style={styles.name}>Soora</AppText>
      </View>
      <View>
        <AppButton
          title="Contact Us"
          bgColor="rgba(39, 39, 39, 1)"
          iconName="arrow-top-right"
          iconType="material-community"
        />
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
  },
  icon: {
    fontSize: 30,
    color: colors.blue,
    fontWeight: '900',
  },
  name: {
    fontSize: 20,
    color: colors.blue,
    fontStyle: 'italic',
    fontWeight: '800',
  },
});
