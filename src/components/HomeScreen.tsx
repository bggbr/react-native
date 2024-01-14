import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';
import {useCallback} from 'react';
import MainNavigation from '../common/MainNavigation';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Chair: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Chair');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <MainNavigation />
      <TouchableHighlight
        style={styles.box}
        onPress={onClick}
        underlayColor={'blue'}>
        <Text>Box 1 (Click to go to Details)</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    padding: 20,
    height: 150,
  },
});

export default HomeScreen;
