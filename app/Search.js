import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

export class Search extends Component {
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
        <TextInput value={this.state.newSearch} onChangeText={this.handleChange.bind(this)}
          style={styles.input}
          placeholder="Type here to search!"
        />
        {this.state.results.map((plant, i) => <Text key={i}>{plant}</Text>)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(100,0,100,0.9)',
    padding: 40
  },
  input: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height: 40,
    width: 200
  }
});
