import React, {useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  KeyboardAwareScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import AuthHead from '../../../components/authHead';
import Button from '../../../components/button';
import theme from '../../../constants/theme';
import Styles from './styles';

const {width, height} = Dimensions.get('screen');

const Signup = ({navigation}) => {
  const [imgpath, setImgPath] = useState(
    require('../../../images/accountImgL.png'),
  );
  const [imgUri, setImgUri] = useState('');

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImgUri(image.path);
      console.log(imgUri);
    });
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('image');
      console.log(image);
      setImgUri(image.path);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          style={Styles.bgImage}
          source={require('../../../images/bgImage1.png')}>
          <View style={Styles.accountImgCont}>
            <View style={Styles.imgCont}>
              <Image
                resizeMode="contain"
                style={{width: '100%', height: '100%', borderRadius: 100}}
                source={imgUri === '' ? imgpath : {uri: imgUri}}
              />
            </View>
            <View style={Styles.uploadtext}>
              <Text
                style={{color: 'white'}}
                onPress={() => {
                  openGallery();
                }}>
                Uplaod picture
              </Text>
              <Text
                style={{color: 'white'}}
                onPress={() => {
                  openCamera();
                }}>
                Take picture
              </Text>
            </View>
          </View>

          <View style={Styles.middleCont}>
            <Text style={Styles.title}>First Name</Text>
            <View style={Styles.inputCont}>
              <TextInput style={Styles.input}></TextInput>
            </View>
            <Text style={Styles.title}>Last Name</Text>
            <View
              style={[
                Styles.inputCont,
                {
                  borderRadius: 5,
                },
              ]}>
              <TextInput style={Styles.input}></TextInput>
            </View>
            <Text style={Styles.title}>Phone Number</Text>
            <View
              style={[
                Styles.inputCont,
                {
                  borderRadius: 5,
                },
              ]}>
              <TextInput
                style={Styles.input}
                keyboardType="numeric"></TextInput>
            </View>
            <Text style={Styles.title}>Email</Text>
            <View
              style={[
                Styles.inputCont,
                {
                  borderRadius: 5,
                },
              ]}>
              <TextInput
                style={Styles.input}
                keyboardType="email-address"></TextInput>
            </View>
            <Text style={Styles.title}>Address</Text>
            <View
              style={[
                Styles.inputCont,
                {
                  borderRadius: 5,
                },
              ]}>
              <TextInput style={Styles.input}></TextInput>
            </View>
          </View>

          <Button
            onPress={() => {
              navigation.navigate('PhoneNumber');
            }}
            title="Sign up"
          />

          <View style={Styles.signupCont}>
            <Text style={Styles.signupText}>
              Already have an account ?
              <Text
                style={{color: theme.colors.red}}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                {' '}
                Login
              </Text>
            </Text>
          </View>
          <View>
            <Image
              resizeMode="contain"
              style={{
                width: 70,
                height: 40,
                marginTop: 10,
                alignSelf: 'center',
              }}
              source={require('../../../images/logo.png')}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
