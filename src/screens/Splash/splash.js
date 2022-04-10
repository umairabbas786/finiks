import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Image,
  Dimensions,
  View,
} from 'react-native';
import AuthHead from '../../components/authHead';

const {width, height} = Dimensions.get('screen');
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AuthStack');
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('./../../images/bgimage.png')}>
        <AuthHead />
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Splash;
