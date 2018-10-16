
import React, {Component} from 'react';
import { Button } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Quang Duy has been here!',
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
