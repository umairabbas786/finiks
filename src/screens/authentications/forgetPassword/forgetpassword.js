import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  TextInput,
  View,
} from 'react-native';
import AuthHead from '../../../components/authHead';
import Button from '../../../components/button';
import theme from '../../../constants/theme';
import Styles from './styles';

const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={Styles.bgImage}
        source={require('../../../images/bgImage1.png')}>
        <AuthHead />
        <Text style={Styles.description}>
          Provide your accounts email for which you want to reset your password
        </Text>
        <View style={Styles.inputCont}>
          <TextInput
            style={Styles.inputText}
            placeholder="Enter your Email"
            placeholderTextColor={'white'}></TextInput>
        </View>
        <View style={Styles.signupCont}>
          <Text style={Styles.signupText}>
            Didn't get code?
            <Text style={{color: theme.colors.red}}> Resend</Text>
          </Text>
        </View>
        <Button
          onPress={() => {
            navigation.navigate('NewPassword');
          }}
          title={'Reset'}
        />
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title={'Cancel'}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForgetPassword;
