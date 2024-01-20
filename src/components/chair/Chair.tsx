import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ChairDetail from './ChairDetail';
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
  ChairMain: undefined;
  ChairDetail: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

function Chair({navigation}: HomeScreenProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChairMain"
        component={ChairMainScreen}
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ChairDetail"
        component={ChairDetail}
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ChairMain');
              }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default Chair;
