import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Category: undefined;
  ChairMain: undefined;
  ChairDetail: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

function ChairMainScreen({navigation}: HomeScreenProps) {
  const lectures = [
    {
      id: 1,
      title: 'Lecture 1: Introduction to Chair Pilates',
      duration: 'Duration: 30 mins',
    },
    {
      id: 2,
      title: 'Lecture 2: Advanced Chair Techniques',
      duration: 'Duration: 45 mins',
    },
    {
      id: 3,
      title: 'Lecture 3: Chair Pilates for Rehabilitation',
      duration: 'Duration: 40 mins',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../../assets/chairmain.jpg')}
        style={styles.image}
      />
      <Text style={styles.header}>Pilates Chair</Text>
      <Text style={styles.body}>
        The Pilates Chair, a compact and versatile exercise tool, is ideal for
        both studio and home use. Developed by Joseph Pilates, it's appreciated
        worldwide for its adjustable pedals and spring resistance. Suitable for
        all skill levels, the Chair enhances lower body strength, core
        stability, and upper body muscle.
      </Text>
      <Text style={styles.body}>
        It promotes muscle balance and improves posture. Also, it's beneficial
        for full-body conditioning, core muscle strengthening, rehabilitation,
        and senior exercises. The Chair has become a core apparatus in Pilates,
        improving physical balance and well-being.
      </Text>
      {/*  */}

      <Text style={styles.header}>Lecture List</Text>

      {lectures.map(lecture => (
        <TouchableOpacity
          key={lecture.id}
          style={styles.listItem}
          onPress={() => navigation.navigate('ChairDetail')}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.playButton}
          />
          <View style={styles.lectureInfo}>
            <Text style={styles.lectureTitle}>{lecture.title}</Text>
            <Text style={styles.lectureDuration}>{lecture.duration}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  playButton: {
    width: 50, // 적절한 크기 설정
    height: 50, // 적절한 크기 설정
    marginRight: 10,
  },
  lectureInfo: {
    flexDirection: 'column',
  },
  lectureTitle: {
    fontWeight: 'bold',
    color: '#000',
  },
  lectureDuration: {
    color: 'grey',
  },
  container: {
    // flexDirection: 'column',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: windowWidth, // 적절한 너비
    height: windowWidth / 2,
    // resizeMode: 'contain', // 이미지 비율 유지
    margin: 0,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    color: '#000',
  },
  body: {
    fontSize: 15,
    margin: 10,
    textAlign: 'justify', // 텍스트 정렬
    lineHeight: 15, // 줄 간격 조정
  },
});

export default ChairMainScreen;
