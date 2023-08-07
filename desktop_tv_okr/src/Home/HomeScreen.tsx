import React from 'react';
import {View, Text, Platform} from 'react-native';
import {HomeScreenTv} from './HomeScreenTv';

const isTv = Platform.isTV;

export function HomeScreen() {
  if (isTv) {
    return <HomeScreenTv />;
  }

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
