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
    <View style={styles.child}>
      <Text style={styles.headerText}>
        Welcome to KingdomAutomata!
      </Text>
    </View>
    <View style={styles.child}><Search /></View>
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
