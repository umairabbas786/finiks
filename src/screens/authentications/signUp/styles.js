import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../constants/theme';

const {width, height} = Dimensions.get('screen');

const Styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  accountImgCont: {
    width,
    alignSelf: 'center',
    alignItems: 'center',
    height: height / 3.8,
    justifyContent: 'center',
  },
  imgCont: {
    width: width / 3,
    height: width / 3,
    backgroundColor: '#E4E4E4',
    borderRadius: 100,
  },
  uploadtext: {
    flexDirection: 'row',
    width: width / 1.7,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  middleCont: {width: '90%', alignSelf: 'center', marginTop: 15},
  inputCont: {
    width: '100%',
    backgroundColor: theme.colors.secondary,
    height: 40,
    borderRadius: 5,
  },
  title: {color: 'white', marginBottom: 5, marginTop: 14},
  input: {
    width: '95%',
    height: '100%',
    borderRadius: 5,
    alignSelf: 'center',
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
