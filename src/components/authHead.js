import React from 'react';
import {View, Dimensions, Image} from 'react-native';

const {width, height} = Dimensions.get('screen');
const AuthHead = ({top = false}) => {
  return (
    <View
      style={{
        height: top ? height / 3.4 : height / 2.8,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        resizeMode="contain"
        style={{
          alignSelf: 'center',
          width: top ? width / 1.4 : width / 1.3,
          height: top ? 100 : 120,
        }}
        source={require('./../images/logo.png')}></Image>
    </View>
  );
};

export default AuthHead;
