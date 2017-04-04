import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
// import styles from '../styles/Search-styles';
import homeButtonStyles from '../styles/HomeButton-Styles';
import SearchItem from './SearchItem';

class SearchResults extends Component {
  static navigationOptions = {
    title: 'Search Results',
  }

  render() {
    const { navigate } = this.props.navigation
    const { results } = this.props.navigation.state.params
    const display = results.map((item) => {
      return (
        <SearchItem {...item} key={item.id} />
      )
    })

    return (
      <ScrollView>
        {display}
        <TouchableOpacity
          onPress={() => {
            navigate('Home')
          }}
        >
          <Image
            source={require('../images/home.png')}
            style={homeButtonStyles.homeButton}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }

}

export default SearchResults;
