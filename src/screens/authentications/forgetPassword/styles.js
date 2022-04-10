import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  bgImage: {width: '100%', height: '100%'},
  description: {color: 'white', width: '90%', alignSelf: 'center'},
  inputCont: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    height: 40,
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
  },
  inputText: {
    width: '90%',
    alignSelf: 'center',
    color: 'white',
  },
  signupCont: {
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
  },
  signupText: {
    color: 'white',
  },
});
export default Styles;
