import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'
import { Camera } from './app/Camera'

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
    backgroundColor: 'hsla(170, 100%, 50%, 1)'
  },
  child: {
    margin: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})

AppRegistry.registerComponent('KingdomAutomata', () => KingdomAutomata)
