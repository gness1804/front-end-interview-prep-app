import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import answers from '../helpers/answers';
import styles from '../styles/Question-styles';

class OtherHTML extends Component {
  static navigationOptions = {
    title: 'Other HTML Questions',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigate('Answer', { question: answers.attr })
          }}
        >
          <Text style={styles.text}>What are data attributes good for?</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

}

export default OtherHTML;
