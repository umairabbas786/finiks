import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../constants/theme';

const {width, height} = Dimensions.get('screen');

const Styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  header: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  accountImgCont: {
    width,
    alignSelf: 'center',
    alignItems: 'center',
    height: height / 3.8,
    justifyContent: 'center',
  },
  imgCont: {
    width: width / 4,
    height: width / 4,
    backgroundColor: '#E4E4E4',
    borderRadius: 100,
  },
  uploadtext: {
    flexDirection: 'row',
    width: width / 1.7,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  middleCont: {width: width / 1.1, alignSelf: 'center', marginTop: 15},
  inputCont: {
    width: '100%',
    backgroundColor: 'white',
    height: 40,
    borderRadius: 5,
    elevation: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {color: theme.colors.red, marginBottom: 5, marginTop: 10},
  input: {
    height: '100%',
    borderRadius: 5,
    width: '80%',
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
