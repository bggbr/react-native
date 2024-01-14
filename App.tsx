import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Chair: undefined;
};

import BottomTab from './src/common/BottomTab';
import Chair from './src/components/Chair';
import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={
          {
            // headerShown: false,
          }
        }
      />
      <HomeStack.Screen name="Chair" component={Chair} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: false,
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
      {/* <BottomTab /> */}
      {/* <Stack.Navigator>
        <Stack.Screen name="Chair" component={Chair} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
