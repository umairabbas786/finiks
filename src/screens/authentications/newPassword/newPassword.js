import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  TextInput,
} from 'react-native';
import AuthHead from '../../../components/authHead';
import Button from '../../../components/button';
import theme from '../../../constants/theme';
import Styles from './styles';

const NewPassword = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={Styles.bgImage}
        source={require('../../../images/bgImage1.png')}>
        <AuthHead top={true} />
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={Styles.title}>Verification code</Text>
          <View style={Styles.inputCont}>
            <TextInput
              style={Styles.inputText}
              placeholder=""
              placeholderTextColor={theme.colors.white}></TextInput>
          </View>
          <Text style={Styles.title}>New Password</Text>
          <View style={Styles.inputCont}>
            <TextInput
              style={Styles.inputText}
              placeholder=""
              placeholderTextColor={theme.colors.white}></TextInput>
          </View>
          <Text style={Styles.title}>Old Password</Text>
          <View style={Styles.inputCont}>
            <TextInput
              style={Styles.inputText}
              placeholder=""
              placeholderTextColor={theme.colors.white}></TextInput>
          </View>
        </View>
        <View style={Styles.bottomCont}>
          <Button
            onPress={() => {
              navigation.navigate('Login');
            }}
            title={'Confirm'}
          />
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            title={'Cancel'}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default NewPassword;
