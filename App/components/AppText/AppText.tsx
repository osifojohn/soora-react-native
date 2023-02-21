import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle, Platform } from 'react-native';

interface AppTextProps {
  children: ReactNode;
  style?: TextStyle;
}

function AppText({ children, style }: AppTextProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
export default AppText;
