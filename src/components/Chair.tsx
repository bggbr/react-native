import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ChairDetail from './ChairDetail';
import {useCallback} from 'react';
const Stack = createNativeStackNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';

function ChairMainScreen({navigation}: HomeScreenProps) {
  return (
    <View>
      <Text>Chair Main Page</Text>
      <Button
        title="Go to Chair Detail"
        onPress={() => navigation.navigate('ChairDetail')}
      />
    </View>
  );
}

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  ChairDetail: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Chair({navigation}: HomeScreenProps) {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                // Chair 페이지로 이동하는 코드
                navigation.navigate('Home');
              }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
        name="ChairMain"
        component={ChairMainScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true, // 헤더 표시
          // headerLeft: () => (
          //   <TouchableOpacity
          //     onPress={() => {
          //       // Chair 페이지로 이동하는 코드
          //       navigation.navigate('Chair');
          //     }}>
          //     <Ionicons name="arrow-back" size={24} color="black" />
          //   </TouchableOpacity>
          // ),
        }}
        name="ChairDetail"
        component={ChairDetail}
      />
    </Stack.Navigator>
  );
}

export default Chair;
