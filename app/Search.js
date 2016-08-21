import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
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
      <View>
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
  input: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height: 40,
    width: 200
  }
});
