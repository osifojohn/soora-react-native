import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

import {
  Screen,
  AppHeader,
  AppHero,
  CommingSoonContent,
  SooraImage,
  AppTextInput,
  Footer,
} from '../components';

const HomeScreen = () => {
  return (
    <Screen>
      <BlurView intensity={100} style={StyleSheet.absoluteFill} />
      <LinearGradient
        colors={[
          'rgba(59, 89, 152, 0.02)',
          'rgba(59, 10, 152, 0.1)',
          'rgba(255, 0, 0, 0.05)',
        ]}
        style={styles.background}
      >
        <ScrollView>
          <AppHeader />
          <AppHero />
          <SooraImage source={require('../../assets/soora-img-1.png')} />
          <View>
            <CommingSoonContent text1="Get Notified" text2="When we Launch" />
            <AppTextInput button="button" />
          </View>
          <SooraImage source={require('../../assets/soora-img-2.png')} />
          <Footer />
        </ScrollView>
      </LinearGradient>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  background: {
    flex: 1,
  },
});
export default HomeScreen;
