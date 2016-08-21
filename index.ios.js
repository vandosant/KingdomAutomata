/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

class KingdomAutomata extends Component {
  constructor() {
    super();
    this.state = {
      plants: ['Common Dandelion','American Alpine Speedwell','Goldenaster'],
      newSearch: '',
      results: []
    };
  }
  handleChange(value) {
    const nextResults = this.state.plants.filter(plant => plant.indexOf(value) > -1);
    this.setState({newSearch: value, results: nextResults});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to KingdomAutomata!
        </Text>
	<TextInput value={this.state.newSearch} onChangeText={this.handleChange.bind(this)}
	  style={{height: 40}}
	  placeholder="Type here to search!"
	/>
        {this.state.results.map((plant, i) => <Text key={i}>{plant}</Text>)}
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
});

AppRegistry.registerComponent('KingdomAutomata', () => KingdomAutomata);
