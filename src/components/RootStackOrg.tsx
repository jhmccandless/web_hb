import React from 'react';

import TimerForm from './TimerForm';
import Timer3UI, {Timer3UIInt} from './Timer3UI';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Form: undefined;
  Workout: Timer3UIInt;
};

function RootStackOrg() {
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Form">
          <RootStack.Screen name="Form" component={TimerForm} />
          <RootStack.Screen name="Workout" component={Timer3UI} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootStackOrg;
