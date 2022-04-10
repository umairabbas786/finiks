import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../constants/theme';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  mainCont: {width: width, height: height, alignItems: 'center'},
  middleCont: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 1.1,
  },
  middleTopText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    width: width / 1.1,
    marginBottom: 20,
  },
  inputText: {
    height: '100%',
    width: '95%',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    textAlign: 'center',
    color: 'white',
  },

  bottomCont: {
    height: height / 5,
    justifyContent: 'flex-end',
  },
});

export default Styles;
