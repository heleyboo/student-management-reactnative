import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './app/HomeScreen';
import Details from './app/Details';

const platform = Platform.select({
  ios: 'iOS',
  android: 'Android'
});

type Props = {};

const RootStack = createStackNavigator({
  // Home:HomeScreen
  Home: {
    screen: HomeScreen
  },
  Profile:{
    screen: Details
  },
});

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello {platform}!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
 },
 bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
 },
 blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
 },
 text: {
  borderWidth: 1,
  padding: 25,
  borderColor: 'black',
  backgroundColor: 'red'
},
});
