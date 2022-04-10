import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
const {width, height} = Dimensions.get('screen');
const Styles = StyleSheet.create({
  headerCont: {
    width: '100%',
    borderBottomWidth: moderateScale(0.5),
    borderColor: '#C4C4C4',
  },
  header: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  iconCont: {
    flexDirection: 'row',
    alignItem: 'center',
    width: '14%',
    justifyContent: 'space-between',
  },
  nameCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',
  },
  renderCont: {
    height: moderateScale(350),
    width: width / 1.1,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'flex-start',
    elevation: 5,
    backgroundColor: 'white',
    marginTop: 20,
  },
  renderView: {
    width: width / 1.1,
    alignSelf: 'center',
    height: height / 4.8,
    justifyContent: 'flex-start',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textCont: {
    width: '90%',
    height: height / 4.8,
    alignSelf: 'center',
    flex: 1,
  },
  welcome: {
    fontWeight: '600',
    marginBottom: moderateScale(5),
    fontSize: moderateScale(15),
  },
  welcomeDescription: {fontWeight: '300', fontSize: moderateScale(13)},
  boxCont: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  box: {
    width: '49%',
    height: moderateScale(90),
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 15,
    borderRadius: 9,
    alignItems: 'center',
  },
});
export default Styles;
