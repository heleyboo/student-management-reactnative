import React, {Component} from 'react';
import { Button } from 'react-native';

export default class Details extends React.Component {
    static navigationOptions = {
      title: 'Details',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Details!!"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      );
    }
  }