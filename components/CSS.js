import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight, View, Button } from 'react-native';

class CSS extends Component {
  static navigationOptions = {
    title: 'CSS Questions',
  }

  render() {
    return (
      <View>
        <Text>I am the CSS Component.</Text>
      </View>
    );
  }

}

export default CSS;