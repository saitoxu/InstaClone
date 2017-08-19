import React, { Component } from 'react'
import { AlertIOS, View, Image, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import Video from 'react-native-video'
import Ionicons from 'react-native-vector-icons/Ionicons'

const { width } = Dimensions.get('window');

export default class HomeScreen extends Component {
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
  };

  constructor(props) {
    super(props);
    // this.onLoad = this.onLoad.bind(this);
    // this.onProgress = this.onProgress.bind(this);
    // this.onBuffer = this.onBuffer.bind(this);
    this.renderSkinList = this.renderSkinList.bind(this);
  }

  renderSkinList() {
    const data = [
      { key: 1, source: require('../../contents/broadchurch.mp4'), username: 'james', avatarUrl: 'https://pbs.twimg.com/profile_images/856925656935956481/u6p22VHP_400x400.jpg' },
      { key: 2, source: require('../../contents/broadchurch.mp4'), username: 'zeldman', avatarUrl: 'https://pbs.twimg.com/profile_images/843519123711803393/pyYe9LFq_400x400.jpg' },
      { key: 3, source: require('../../contents/broadchurch.mp4'), username: 'sauro', avatarUrl: 'https://pbs.twimg.com/profile_images/872957497086291969/1bpxCxsq_400x400.jpg' },
      { key: 4, source: require('../../contents/broadchurch.mp4'), username: 'zack', avatarUrl: 'https://pbs.twimg.com/profile_images/378800000298602869/7043dd1b121f1a9fa077caa6961fccc1_400x400.jpeg' },
      { key: 5, source: require('../../contents/broadchurch.mp4'), username: 'ken', avatarUrl: 'https://pbs.twimg.com/profile_images/793324507951828994/oOIaRree_400x400.jpg' }
    ]

    return (
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }) => (
          <View>
            <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row' }}>
              <Image
                style={{ width: 36, height: 36, margin: 12, borderRadius: 18, borderWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
                source={{ uri: item.avatarUrl }}
              />
              <Text style={{ fontWeight: 'bold', height: 60, lineHeight: 60, flex: 1 }}>{item.username}</Text>
              <Ionicons name="ios-more" size={30} color="black" style={{ lineHeight: 60, marginRight: 12 }} />
            </View>
            <Video
              source={item.source}
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
              onEnd={() => { AlertIOS.alert('Done!') }}
              repeat={true}
            />
          <View style={{ height: 54, backgroundColor: 'white', flexDirection: 'row' }}>
              <Ionicons name="ios-heart-outline" size={34} color="black" style={{ marginTop: 12, marginLeft: 15 }} />
              <Ionicons name="ios-text-outline" size={34} color="black" style={{ marginTop: 12, marginLeft: 20 }} />
              <Ionicons name="ios-send-outline" size={34} color="black" style={{ marginTop: 12, marginLeft: 20 }} />
              <View style={{ flex: 1 }} />
              <Ionicons name="ios-bookmark-outline" size={34} color="black" style={{ marginTop: 12, marginRight: 15 }} />
            </View>
            <View style={{ marginBottom: 20, paddingLeft: 15 }}>
              <Text style={{ fontSize: 12, color: 'gray' }}>{'X MINUTES AGO'}</Text>
            </View>
          </View>
        )}
      />
    )
  }

  render() {
    return this.renderSkinList();
  }
}
