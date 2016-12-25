import React, { Component } from 'react'
import { View, Text } from 'react-native'
import RNCamera from 'react-native-camera'

export class Camera extends Component {
  constructor (props) {
    super(props)
    this.capture = this.capture.bind(this)
  }
  capture () {
    this.camera.capture()
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }
  render () {
    return (
      <View>
        <RNCamera ref={cam => { this.camera = cam }}>
          <Text onPress={this.capture}>CAPTURE</Text>
        </RNCamera>
      </View>
    )
  }
}
