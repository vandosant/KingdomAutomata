import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const SearchResults = function(props) {
  return (
    <View style={styles.container}>
      {props.results.map((plant, i) => { return (
          <View style={styles.card} key={i}>
	    <Text style={styles.cardText}>{plant}</Text>
          </View>
      )})}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10
  },
  card: {
    backgroundColor: 'lightgrey',
    margin: 5
  },
  cardText: {
    fontWeight: '200'
  }
})
