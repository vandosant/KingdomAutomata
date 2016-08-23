import React from 'react';
import { Text, View } from 'react-native';

export const SearchResults = function(props) {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      {props.results.map((plant, i) => <Text style={{width: 100, backgroundColor: 'grey'}}key={i}>{plant}</Text>)}
    </View>
  )
}
