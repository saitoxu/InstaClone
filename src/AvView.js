import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import Video from 'react-native-video'
import Ionicons from 'react-native-vector-icons/Ionicons'

const { width } = Dimensions.get('window');

export default class AvView extends Component {
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: true,
    skin: 'custom',
    ignoreSilentSwitch: null,
    isBuffering: false,
    imageHeight: 0
  }

  componentWillMount() {
    if (this.props.type === 'image') {
      Image.getSize(this.props.source, (w, h) => {
        this.setState({ imageHeight: Math.floor(h * (width / w)) })
      })
    }
  }

  render() {
    if (this.props.type === 'image') {
      return (
        <View>
          <Image
            source={{ uri: this.props.source }}
            style={{ width, height: this.state.imageHeight }}
            resizeMode={'contain'}
          />
        </View>
      )
    }

    return (
      <Video
        source={{ uri: this.props.source }}
        style={{ height: width }}
        rate={this.state.rate}
        paused={this.state.paused}
        volume={this.state.volume}
        muted={this.state.muted}
        ignoreSilentSwitch={this.state.ignoreSilentSwitch}
        resizeMode={'cover'}
        onLoad={this.onLoad}
        onBuffer={this.onBuffer}
        onProgress={this.onProgress}
        onEnd={() => null}
        repeat={true}
      />
    )
  }
}
