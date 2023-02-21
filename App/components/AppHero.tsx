import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GooglePlay_AppStore_Batch from './GooglePlay-AppStoreBatch';
import CommingSoonContent from './CommingSoonContent';

const AppHero = () => {
  return (
    <View style={styles.container}>
      <CommingSoonContent text1="Bringing" text2="Muslims Together" />
      <GooglePlay_AppStore_Batch />
    </View>
  );
};

export default AppHero;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
