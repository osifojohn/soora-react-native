import { Button } from '@rneui/themed';
import React from 'react';
import { StyleSheet, TextInput, View, Platform } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText/AppText';

type AppTextInputProps = {
  button?: string;
};

export default function AppTextInput({ button }: AppTextInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.notifyMeContainer}>
        <TextInput style={styles.textInput} />
        {button && (
          <View style={styles.buttonContainer}>
            <Button
              title="Notify Me"
              size="lg"
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width: 140,
                borderRadius: 30,
                marginVertical: 0,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
              style={styles.button}
            />
          </View>
        )}
      </View>
      <AppText style={styles.text}>Don't worry, we won't spam you :)</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginVertical: 15,
  },
  notifyMeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  textInput: {
    color: colors.dark,
    borderColor: colors.black,
    borderWidth: 1,
    padding: 16,
    marginVertical: 10,
    borderRadius: 35,
    width: '90%',
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  buttonContainer: {
    position: 'absolute',
    right: 30,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  button: {
    // height: 160,
  },
  text: {
    position: 'absolute',
    bottom: -15,
    fontSize: 16.5,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
});
