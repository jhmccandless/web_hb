import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import TimerForm from './TimerForm';
import Timer3UI from './Timer3UI';

function Screen1() {
  return <Text>Screen 1</Text>;
}

function Screen2() {
  return <Text>Screen 2</Text>;
}

const Stack = createNativeStackNavigator();

function WrapperView() {
  return (
    <>
      <Stack.Navigator initialRouteName="form">
        <Stack.Screen name="Timer Parameters" component={TimerForm} />
        <Stack.Screen name="Workout" component={Timer3UI} />
      </Stack.Navigator>
    </>
  );
}

export default WrapperView;
