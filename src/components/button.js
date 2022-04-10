import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import theme from '../constants/theme';

const {width, height} = Dimensions.get('screen');

const Button = ({title = '', onPress, color = theme.colors.red}) => {
  return (
    <TouchableOpacity
      style={[Styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const Styles = StyleSheet.create({
  button: {
    width: width / 1.6,
    alignSelf: 'center',
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
