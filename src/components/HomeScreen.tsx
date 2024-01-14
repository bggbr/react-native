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
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {/* style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} */}
      {/* <TouchableHighlight onPress={onClick}>
            <Text>Home Screen</Text>
        </TouchableHighlight> */}

      <MainNavigation />
      <TouchableHighlight
        style={styles.box}
        onPress={onClick}
        underlayColor={'blue'}>
        <Text>Box 1 (Click to go to Details)</Text>
      </TouchableHighlight>
      <View style={styles.box}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 3</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 4</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 4</Text>
      </View>
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
