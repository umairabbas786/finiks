import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
  header: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  accountTab: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    elevation: 5,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    marginTop: 30,
  },
  ongoingCont: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  ongoingText: {
    color: '#AFAFAF',
    borderBottomColor: '#AFAFAF',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  addCont: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  addContText: {
    color: '#AFAFAF',
    borderBottomColor: '#AFAFAF',
    marginBottom: 15,
  },
  logo: {alignSelf: 'center', width: 70, height: 40, marginTop: 30},
});

export default Styles;
