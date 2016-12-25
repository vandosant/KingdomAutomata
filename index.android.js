/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native'

class KingdomAutomata extends Component {
  constructor () {
    super()
    this.state = {
      plants: ['a', 'b', 'c'],
      newSearch: ''
    }
  }
  handleChange (value) {
    this.setState({newSearch: value})
  }
  handlePress () {
    const plants = [...this.state.plants, this.state.newSearch]
    this.setState({plants, newSearch: ''})
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to KingdomAutomata!
        </Text>
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>Search</Text>
        </TouchableHighlight>
        <TextInput value={this.state.newSearch} onChangeText={this.handleChange.bind(this)} />
        {this.state.plants.map(plant => <Text>{plant}</Text>)}
        <Text>{this.state.search}</Text>
      </View>
    )
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
