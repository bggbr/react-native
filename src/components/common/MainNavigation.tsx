import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

// type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function MainNavigation() {
  // const onClick = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>체어</Text>
      </View>
      <View style={styles.box}>
        <Text>바렐</Text>
      </View>
      <View style={styles.box}>
        <Text>리포머</Text>
      </View>
      <View style={styles.box}>
        <Text>캐딜락</Text>
      </View>
      {/* 여기에 더 많은 박스를 추가할 수 있습니다 */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    padding: 10,
  },
});

export default MainNavigation;
