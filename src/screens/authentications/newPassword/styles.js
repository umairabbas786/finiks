import React from 'react';
import {StyleSheet} from 'react-native';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'white',
    marginBottom: 10,
  },
  inputCont: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    height: 40,
  },
  inputText: {
    color: 'white',
    marginLeft: 5,
  },
});
export default Styles;
