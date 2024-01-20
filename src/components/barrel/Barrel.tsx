import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BarrelDetail from './BarrelDetail';
const Stack = createNativeStackNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';

function BarrelMainScreen({navigation}: HomeScreenProps) {
  return (
    <View>
      <Text>Barrel Main Page</Text>
      <Button
        title="Go to Barrel Detail"
        onPress={() => navigation.navigate('BarrelDetail')}
      />
    </View>
  );
}

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  BarrelMain: undefined;
  BarrelDetail: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

function Barrel({navigation}: HomeScreenProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BarrelMain"
        component={BarrelMainScreen}
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
        name="BarrelDetail"
        component={BarrelDetail}
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BarrelMain');
              }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default Barrel;
