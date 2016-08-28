import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import { SearchResults } from './atoms/SearchResults';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      newSearch: '',
      results: []
    };
  }
  componentWillMount() {
    fetch("http://localhost:3000/plants", {Accept: "application/json"})
    .then(res => res.json())
    .then(data => {
      this.setState({plants: data});
    })
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
	{this.state.results.map((result, i) => <SearchResults key={i} result={result} /> )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'hsla(286, 75%, 55%, 0.87)',
  },
  input: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height: 40,
    width: 200
  }
});
