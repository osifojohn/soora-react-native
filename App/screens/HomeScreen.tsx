import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Screen from '../components/Screen';
import { BlurView } from 'expo-blur';
import AppHeader from '../components/AppHeader';
import AppHero from '../components/AppHero';
import CommingSoonContent from '../components/CommingSoonContent';
import AppTextInput from '../components/AppTextInput';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <Screen>
      <BlurView intensity={100} style={StyleSheet.absoluteFill} />
      <LinearGradient
        colors={[
          'rgba(59, 89, 152, 0.1)',
          'rgba(59, 89, 152, 0.1)',
          'rgba(255, 0, 0, 0.05)',
        ]}
        style={styles.background}
      >
        <ScrollView>
          <AppHeader />
          <AppHero />
          <View>
            <CommingSoonContent text1="Get Notified" text2="When we Launch" />
            <AppTextInput button="button" />
          </View>
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
