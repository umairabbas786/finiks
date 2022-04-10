import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import AuthHead from '../../../components/authHead';
import Button from '../../../components/button';
import Styles from './styles';

const {width, height} = Dimensions.get('window');

const ConfirmCode = ({navigation}) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={Styles.mainCont}
        source={require('./../../../images/bgImage1.png')}>
        <ScrollView style={{height}}>
          <AuthHead />
          <View style={Styles.middleCont}>
            <Text style={Styles.middleTopText}>
              Enter your Unique 6 Digit Campaign Invite Code Below:
            </Text>
            <View
              style={{
                width: width / 1.2,
                alignItems: 'center',
                backgroundColor: '#453535',
                height: 40,
                borderRadius: 10,
              }}>
              <TextInput
                style={Styles.inputText}
                placeholder="Invite Code"
                placeholderTextColor={'#6F6969'}></TextInput>
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
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ConfirmCode;
