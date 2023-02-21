import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const GooglePlay_AppStore_Batch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image1}
          source={require('../../assets/google-play-badge.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image2}
          source={require('../../assets/apple-store-badge.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default GooglePlay_AppStore_Batch;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 150,
    height: 110,
  },
  image1: {
    width: '100%',
    height: '100%',
    color: 'rgba(217, 217, 217, 0.5)',
  },
  image2: {
    width: '82%',
    height: 110,
    color: 'rgba(217, 217, 217, 0.5)',
  },
});
