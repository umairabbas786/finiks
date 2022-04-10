import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import Styles from './styles';
import Button from './../../../components/button';
import theme from '../../../constants/theme';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.headerCont}>
        <View style={Styles.header}>
          <View style={Styles.iconCont}>
            <Icon color="#D12E2F" name="calendar" type="foundation" size={28} />
            <Icon
              name="bell"
              type="fontisto"
              size={20}
              style={{marginTop: 4}}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Accounts');
            }}
            style={Styles.nameCont}>
            <Icon color="#D12E2F" name="chevron-small-down" type="entypo" />
            <Text style={{fontWeight: 'bold', color: '#545454'}}>
              HJ For Congress
            </Text>
            <Icon
              type="material-community"
              name="card-multiple"
              color="#D12E2F"
              size={18}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{marginVertical: 10}}>
        <View style={Styles.renderCont}>
          <View style={Styles.renderView}>
            <Image
              style={Styles.img}
              source={require('./../../../images/homeImg1.png')}
            />
          </View>
          <View style={Styles.textCont}>
            <View style={{height: 20}}></View>
            <Text style={Styles.welcome}>Welcome Back</Text>
            <Text style={Styles.welcomeDescription}>
              We've got a lot of work to do before this election, sign up for a
              canvassing shift here:
            </Text>
            <Button
              onPress={() => {
                navigation.navigate('Signup');
              }}
              title="Sign Up"
              color="#6B4FA3"
            />
          </View>
        </View>
        <View style={Styles.renderCont}>
          <View style={Styles.renderView}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
              source={require('./../../../images/homeImg2.png')}
            />
          </View>
          <View style={Styles.textCont}>
            <View style={{height: 20}}></View>
            <Text style={Styles.welcome}>Election: 4/25/2021</Text>
            <Text style={Styles.welcomeDescription}>
              Early Voting Begins in 64 days
            </Text>
            <View style={Styles.boxCont}>
              <View style={Styles.box}>
                <Text style={{color: theme.colors.red}}>
                  Days Until Election
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: theme.colors.red,
                  }}>
                  142
                </Text>
              </View>

              <View style={[Styles.box, {backgroundColor: theme.colors.red}]}>
                <Text style={{color: theme.colors.white}}>
                  Voters Contacted
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: theme.colors.white,
                  }}>
                  214
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={Styles.renderCont}>
          <View style={Styles.renderView}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
              source={require('./../../../images/homeImg3.png')}
            />
          </View>
          <View style={Styles.textCont}>
            <View style={{height: 20}}></View>
            <Text style={{fontWeight: '300', fontSize: 13, marginTop: 8}}>
              Our FEC fundraising deadline is at midnight tonight. We’re almost
              at our goal — please chip in if you can 💪🏾
            </Text>
            <Text style={{fontWeight: '300', fontSize: 10, marginTop: 8}}>
              <Text style={{fontWeight: '600'}}>Twitter </Text> 13 hours ago
            </Text>
            <View style={{height: 10}}></View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <Icon
                style={{marginBottom: 5}}
                color="#1BA1F2"
                name="twitter"
                type="antdesign"
                size={30}
              />
              <Button title="Retweet" color="#1BA1F2" />
            </View>
          </View>
        </View>
        <View style={{height: 50}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
``;
