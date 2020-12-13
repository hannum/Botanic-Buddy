import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimension';

import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Colors from '../utils/Colors';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={28} color={Colors.Green} />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor='#c1c1c1'
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 8,
    width: '100%',
    height: windowHeight / 13,
    borderColor: Colors.Green,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 14,
    fontFamily: 'book',
    color: Colors.Black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
});