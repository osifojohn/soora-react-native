import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import colors from '../config/colors';
import AppText from './AppText/AppText';

const Footer = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="facebook" type="font-awesome" color="black" />
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="twitter"
            type="font-awesome"
            color="black"
            style={styles.icon}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="instagram"
            type="font-awesome"
            color="black"
            style={styles.icon}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="instagram"
            type="font-awesome"
            color="black"
            style={styles.icon}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="youtube"
            type="antdesign"
            color="black"
            style={styles.icon}
          />
        </View>
      </View>
      <AppText style={styles.copyright}>
        Copy &copy;2022 Soora. All rights reserved
      </AppText>
    </View>
  );
};

export default Footer;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    marginTop: 50,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    width: 50,
    borderColor: colors.black,
    height: 50,
    marginLeft: 10,
  },
  icon: {
    // fontSize: 20,
  },
  background: {
    flex: 1,
  },
  copyright: {
    fontSize: 15,
    paddingTop: 8,
    alignSelf: 'center',
  },
});
