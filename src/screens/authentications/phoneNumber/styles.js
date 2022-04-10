import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  mainCont: {width: width, height: height},
  middleCont: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleTopText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    marginVertical: 10,
  },
  middleBottomText: {
    color: '#D2D2D2',
    fontWeight: '300',
    fontSize: 12,
    marginVertical: 10,
  },
  bottomCont: {
    height: height / 5,
    justifyContent: 'flex-end',
  },
});

export default Styles;
