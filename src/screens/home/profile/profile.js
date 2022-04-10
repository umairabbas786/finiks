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
import {Icon} from '@rneui/themed';
import Styles from './styles';

const {width, height} = Dimensions.get('screen');

const Profile = ({navigation}) => {
  const [imgpath, setImgPath] = useState(
    require('../../../images/accountImgL.png'),
  );
  const [imgUri, setImgUri] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

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
      <View style={Styles.header}>
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          size={18}
          name="left"
          type="antdesign"
          color={theme.colors.red}
        />
        <Text style={{fontWeight: '500'}}>My Account</Text>
        <Text
          onPress={() => {
            navigation.replace('HomeStack');
          }}
          style={{fontWeight: '500', color: theme.colors.red}}>
          Save
        </Text>
      </View>
      <ScrollView>
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
              style={{color: '#545454', fontSize: 12}}
              onPress={() => {
                openGallery();
              }}>
              Uplaod picture
            </Text>
            <Text
              style={{color: '#545454', fontSize: 12}}
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
            <TextInput
              style={Styles.input}
              placeholder="Adam"
              value={firstName}
              onChangeText={val => {
                setFirstName(val);
              }}
            />
            {firstName !== '' ? (
              <Icon
                onPress={() => {
                  setFirstName('');
                }}
                color={theme.colors.red}
                size={17}
                name="closecircle"
                type="antdesign"
              />
            ) : null}
          </View>
          <Text style={Styles.title}>Last Name</Text>
          <View
            style={[
              Styles.inputCont,
              {
                borderRadius: 5,
              },
            ]}>
            <TextInput
              style={Styles.input}
              placeholder="Christensen"
              value={lastName}
              onChangeText={val => {
                setLastName(val);
              }}></TextInput>
            {lastName !== '' ? (
              <Icon
                onPress={() => {
                  setLastName('');
                }}
                color={theme.colors.red}
                size={17}
                name="closecircle"
                type="antdesign"
              />
            ) : null}
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
              placeholder="317-361-5044"
              style={Styles.input}
              keyboardType="numeric"
              value={number}
              onChangeText={val => {
                setNumber(val);
              }}
            />
            {number !== '' ? (
              <Icon
                onPress={() => {
                  setNumber('');
                }}
                color={theme.colors.red}
                size={17}
                name="closecircle"
                type="antdesign"
              />
            ) : null}
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
              placeholder="office@forthemanynotjustme.com"
              keyboardType="email-address"
              value={email}
              onChangeText={() => {
                setEmail();
              }}
            />
            {email !== '' ? (
              <Icon
                onPress={() => {
                  setEmail('');
                }}
                color={theme.colors.red}
                size={17}
                name="closecircle"
                type="antdesign"
              />
            ) : null}
          </View>
          <Text style={Styles.title}>Address</Text>
          <View
            style={[
              Styles.inputCont,
              {
                borderRadius: 5,
              },
            ]}>
            <TextInput
              placeholder="Address"
              value={address}
              onChange={val => {
                setAddress(val);
              }}
              style={Styles.input}></TextInput>
            {address !== '' ? (
              <Icon
                onPress={() => {
                  setAddress('');
                }}
                color={theme.colors.red}
                size={17}
                name="closecircle"
                type="antdesign"
              />
            ) : null}
          </View>
        </View>
        <View style={{height: 30}}></View>
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}
          title="Log Out"
        />

        <View>
          <Image
            resizeMode="contain"
            style={{
              width: 70,
              height: 40,
              marginVertical: 20,
              alignSelf: 'center',
            }}
            source={require('../../../images/logoBlack.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
