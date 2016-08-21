import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Search } from './app/Search';

const KingdomAutomata = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to KingdomAutomata!
    </Text>
    <Search />
  </View>
)

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
  }
});

AppRegistry.registerComponent('KingdomAutomata', () => KingdomAutomata);
