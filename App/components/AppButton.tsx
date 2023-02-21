import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/themed';

interface AppButtonProps {
  title: string;
  width?: number;
  bgColor?: string;
  color?: string;
  marginHorizontal?: number;
  marginVertical?: number;
  iconName?: string;
  iconType?: string;
}

const AppButton = ({
  title,
  bgColor,
  width = 170,
  color = 'white',
  marginHorizontal = 50,
  marginVertical = 10,
  iconName,
  iconType,
}: AppButtonProps) => {
  return (
    <View style={styles.container}>
      <Button
        title={title}
        size="lg"
        buttonStyle={{ backgroundColor: bgColor }}
        containerStyle={{
          width,
          marginHorizontal,
          marginVertical,
          borderRadius: 10,
        }}
        titleStyle={{ color, marginHorizontal: 20 }}
      />
      {iconName && (
        <View style={styles.icon}>
          <Icon name={iconName} type={iconType} color="white" />
        </View>
      )}
    </View>
  );
};

export default AppButton;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    right: 55,
    marginRight: 10,
  },
});
