import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './../../screens/authentications/login/login';
import Signup from './../../screens/authentications/signUp/signup';
import ForgetPassword from './../../screens/authentications/forgetPassword/forgetpassword';
import NewPassword from './../../screens/authentications/newPassword/newPassword';
import PhoneNumber from './../../screens/authentications/phoneNumber/phoneNumber';
import ConfirmCode from './../../screens/authentications/confirmCode/confirmCode';

const AuthStack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator initialRouteName="Login">
      <stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="PhoneNumber"
        component={PhoneNumber}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="ConfirmCode"
        component={ConfirmCode}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};
export default AuthStack;
