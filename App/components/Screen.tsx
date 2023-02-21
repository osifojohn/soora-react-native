import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, TextStyle } from 'react-native';
import Constant from 'expo-constants';

interface ScreenProps {
  children: ReactNode;
  style?: TextStyle;
}

function Screen({ children, style }: ScreenProps) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight,
    flex: 1,
  },
});
export default Screen;
