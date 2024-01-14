import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailScreen';
import Chair from '../components/Chair';

const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          //  headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen name="Chair" component={Chair} />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'menu' : 'menu-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
