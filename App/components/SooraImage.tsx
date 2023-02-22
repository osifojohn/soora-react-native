import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

type ImageSource = {
  uri: string;
  width?: number;
  height?: number;
  scale?: number;
};

type SooraImageProps = {
  source: ImageSource;
};

const SooraImage = ({ source }: SooraImageProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={{
          width: 360,
          height: 360,
          resizeMode: 'contain',
          shadowColor: '#1e1e1e',
          shadowOffset: {
            width: 0,
            height: 2.3304,
          },
          shadowOpacity: 0.15,
          shadowRadius: 11.652,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
});
export default SooraImage;
