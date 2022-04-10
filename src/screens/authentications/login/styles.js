import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../constants/theme';

const {width, height} = Dimensions.get('screen');

const Styles = StyleSheet.create({
  bgImage: {
    width: width,
    height: height,
  },
  credCont: {
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    marginBottom: 10,
    marginTop: 20,
  },
  inputCont: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    height: 40,
  },
  inputText: {
    width: '90%',
    alignSelf: 'center',
    height: '100%',
    color: theme.colors.white,
  },
  forgetTextCont: {
    alignItems: 'flex-end',
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
  },
  forgetText: {
    color: 'white',
  },
  signupCont: {
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    marginTop: 15,
  },
  signupText: {
    color: 'white',
  },
});

export default Styles;
