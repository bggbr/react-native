import {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

const ChairDetail = () => {
  const background = require('../../../assets/test.mp4');

  return (
    <View>
      <Text>ChairDetail</Text>
    </View>
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ChairDetail;
