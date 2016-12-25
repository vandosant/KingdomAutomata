import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Search } from './app/Search';
import { Camera } from './app/Camera';

const KingdomAutomata = () => (
  <View style={styles.container}>
    <View style={styles.child}><Camera /></View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(170, 100%, 50%, 1)',
  },
  child: {
    margin: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('KingdomAutomata', () => KingdomAutomata);
