import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ChairDetail from './ChairDetail';
import {useCallback} from 'react';
const Stack = createNativeStackNavigator();
function ChairMainScreen({navigation}: HomeScreenProps) {
  return (
    <View>
      {/* Chair 메인 화면 내용 */}
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
  const onClick = useCallback(() => {
    navigation.navigate('ChairDetail');
  }, [navigation]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="ChairMain"
        component={ChairMainScreen}
      />
      <Stack.Screen
        // options={{headerShown: false}}
        name="ChairDetail"
        component={ChairDetail}
      />
    </Stack.Navigator>
  );
}

export default Chair;
