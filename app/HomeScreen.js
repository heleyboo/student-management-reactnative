
import React, {Component} from 'react';
import { Button } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home Screen A810',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Click Here!!"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      );
    }
  }
