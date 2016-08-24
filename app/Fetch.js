import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      plants: []
    }
  }
  componentWillMount() {
    fetch('https://plantsdb.xyz/search?limit=10&Species=',
      {Accept: 'application/json'}
    )
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return(
      <View>
        <Text>Fetch</Text>
      </View>
    )
  }
}
