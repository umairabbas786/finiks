import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AuthHead from '../../../components/authHead';
import Button from '../../../components/button';
import theme from '../../../constants/theme';
import Styles from './styles';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView disbled={true}>
        <ImageBackground
          style={Styles.bgImage}
          source={require('../../../images/bgImage1.png')}>
          <AuthHead top={true} />
          <View style={Styles.credCont}>
            <Text style={Styles.title}>Email</Text>
            <View style={Styles.inputCont}>
              <TextInput
                style={Styles.inputText}
                placeholder="Enter your Email"
                keyboardType="email-address"
                placeholderTextColor={theme.colors.authText}></TextInput>
            </View>
            <Text style={Styles.title}>Password</Text>
            <View style={Styles.inputCont}>
              <TextInput
                style={Styles.inputText}
                placeholder="Enter Password"
                placeholderTextColor={theme.colors.authText}></TextInput>
            </View>
          </View>
          <View style={Styles.forgetTextCont}>
            <Text
              style={Styles.forgetText}
              onPress={() => {
                navigation.navigate('ForgetPassword');
              }}>
              Forget Password ?
            </Text>
          </View>
          <View>
            <Button
              onPress={() => {
                navigation.navigate('HomeStack');
              }}
              title="Login"
            />
          </View>

          <View style={Styles.signupCont}>
            <Text style={Styles.signupText}>
              Didn't have an account?
              <Text
                style={{color: theme.colors.red}}
                onPress={() => {
                  navigation.navigate('Signup');
                }}>
                {' '}
                Signup
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
