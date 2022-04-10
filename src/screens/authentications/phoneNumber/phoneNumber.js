import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import AuthHead from '../../../components/authHead';
import Button from '../../../components/button';
import theme from '../../../constants/theme';
import Styles from './styles';

const {width, height} = Dimensions.get('window');

const PhoneNumber = ({navigation}) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={Styles.mainCont}
        source={require('./../../../images/bgImage1.png')}>
        <ScrollView>
          <AuthHead />
          <View style={Styles.middleCont}>
            <Text style={Styles.middleTopText}>
              Enter your phone number to get started
            </Text>
            <View style={{width: '95%', alignItems: 'center'}}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                layout="second"
                autoFocus
                placeholder="Phone Number"
                placeholderTextColor={theme.colors.authText}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
                disableArrowIcon
                disableFlag
                containerStyle={{
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 10,
                  height: Platform.OS === 'android' ? 40 : 40,
                }}
                codeTextStyle={{
                  color: theme.colors.authText,
                  fontWeight: '300',
                }}
                textContainerStyle={{
                  borderRadius: 10,
                  backgroundColor: '#453535',
                }}
                textInputProps={{
                  placeholderTextColor: theme.colors.authText,
                  height: 50,
                }}
                textInputStyle={{color: 'white', fontWeight: '300'}}
              />
            </View>
            <Text style={Styles.middleBottomText}>
              We will text a one time code to this number
            </Text>
          </View>
          <View style={Styles.bottomCont}>
            <View style={Styles.bottomCont}>
              <Button
                onPress={() => {
                  navigation.navigate('ConfirmCode');
                }}
                title={'Continue'}
              />
              <Button
                onPress={() => {
                  navigation.goBack();
                }}
                title={'Cancel'}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default PhoneNumber;
