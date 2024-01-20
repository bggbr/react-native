import * as React from 'react';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, TouchableHighlight, View} from 'react-native';
import {useCallback} from 'react';
type RootStackParamList = {
  Home: undefined;
  Category: undefined;
};

type CategoryScreenProps = NativeStackScreenProps<ParamListBase, 'Category'>;

function CategoryScreen({navigation}: CategoryScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>Category Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

export default CategoryScreen;
