import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useCallback} from 'react';
import MainNavigation from './common/MainNavigation';

type RootStackParamList = {
  Home: undefined;
  Category: undefined;
  Chair: undefined;
  Barrel: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(
    (page: keyof RootStackParamList) => {
      navigation.navigate(page);
    },
    [navigation],
  );

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>필라테스 기구</Text>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => onClick('Chair')}></TouchableOpacity>
          <Text style={styles.text}>체어</Text>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => onClick('Barrel')}></TouchableOpacity>
          <Text style={styles.text}>바렐</Text>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => onClick('Barrel')}></TouchableOpacity>
          <Text style={styles.text}>리포머</Text>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => onClick('Barrel')}></TouchableOpacity>
          <Text style={styles.text}>캐딜락</Text>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => onClick('Barrel')}></TouchableOpacity>
          <Text style={styles.text}>캐딜락</Text>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => onClick('Barrel')}></TouchableOpacity>
          <Text style={styles.text}>캐딜락</Text>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => onClick('Barrel')}></TouchableOpacity>
          <Text style={styles.text}>캐딜락</Text>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => onClick('Barrel')}></TouchableOpacity>
          <Text style={styles.text}>캐딜락</Text>
        </View>
      </View>
      {/* <TouchableHighlight
        style={styles.box}
        // onPress={onClick}
        underlayColor={'blue'}>
        <Text>Box 1 (Click to go to Details)</Text>
      </TouchableHighlight> */}
      <Text style={styles.title}>지금 뜨는 인기 클래스</Text>

      <ScrollView style={styles.horizontalScrollView} horizontal={true}>
        <View style={styles.horizontalItem}>
          <TouchableOpacity style={styles.horizontalBox}></TouchableOpacity>
          <Text style={styles.horizontalText}>하체 강화 시퀀스</Text>
        </View>
        <View style={styles.horizontalItem}>
          <TouchableOpacity style={styles.horizontalBox}></TouchableOpacity>
          <Text style={styles.horizontalText}>
            힙조인트 동작을 통한 파워하우스 강화 시퀀스
          </Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const windowWidth = Dimensions.get('window').width;
const boxSize = windowWidth / 5 - 10;
const horizontalBoxSize = windowWidth / 2 - 10;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    color: '#000',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  item: {
    width: boxSize,
    margin: 10,
    alignItems: 'center',
  },
  box: {
    width: boxSize,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'lightgray',
    borderRadius: 15,
    padding: 10,
    height: boxSize,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    width: '100%',
  },
  horizontalScrollView: {
    flexDirection: 'row',
  },
  horizontalItem: {
    alignItems: 'center',
    margin: 10,
  },
  horizontalBox: {
    width: horizontalBoxSize, // 박스의 너비
    height: horizontalBoxSize / 2, // 박스의 높이
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'lightgray',
    borderRadius: 15,
  },
  horizontalText: {
    marginTop: 10,
    textAlign: 'left',
    width: horizontalBoxSize, // 너비를 horizontalBoxSize로 설정
    flexWrap: 'wrap', // 텍스트가 넘칠 경우 줄바꿈
  },
});

export default HomeScreen;
