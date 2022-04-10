import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/home/homepage/homepage';
import Accounts from '../../screens/home/accounts/accounts';
import Profile from '../../screens/home/profile/profile';

const HomeStack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator initialRouteName="HomeScreen">
      <stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Accounts"
        component={Accounts}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};
export default HomeStack;
