import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, FlatList } from 'react-native'
import Video from 'react-native-video'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AvView from '../AvView'

const data = [{
  key: 1,
  username: 'james',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/drive.mov',
  avatarUrl: 'https://pbs.twimg.com/profile_images/856925656935956481/u6p22VHP_400x400.jpg'
}, {
  key: 2,
  username: 'zeldman',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/baking.jpg',
  avatarUrl: 'https://pbs.twimg.com/profile_images/843519123711803393/pyYe9LFq_400x400.jpg'
}, {
  key: 3,
  username: 'sauro',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/sky.mov',
  avatarUrl: 'https://pbs.twimg.com/profile_images/872957497086291969/1bpxCxsq_400x400.jpg'
}, {
  key: 4,
  username: 'zack',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/landscape.jpg',
  avatarUrl: 'https://pbs.twimg.com/profile_images/378800000298602869/7043dd1b121f1a9fa077caa6961fccc1_400x400.jpeg'
}, {
  key: 5,
  username: 'ken',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/snow.jpg',
  avatarUrl: 'https://pbs.twimg.com/profile_images/793324507951828994/oOIaRree_400x400.jpg'
}, {
  key: 6,
  username: 'ken',
  type: 'video',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/videos/garden.mov',
  avatarUrl: 'https://pbs.twimg.com/profile_images/793324507951828994/oOIaRree_400x400.jpg'
}, {
  key: 7,
  username: 'ken',
  type: 'image',
  source: 'https://github.com/saitoxu/InstaClone/raw/master/contents/images/town.jpg',
  avatarUrl: 'https://pbs.twimg.com/profile_images/793324507951828994/oOIaRree_400x400.jpg'
}]

export default class HomeScreen extends Component {
  render() {
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
            <AvView type={item.type} source={item.source} />
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
}
