import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import UploadScreen from '../screens/UpdateScreen';


import { BottomTabParamList, HomeTabParamList, AddTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: '#2f95dc', keyboardHidesTabBar: true }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={AddNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="add" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}


const HomeTabStack = createStackNavigator<HomeTabParamList>();

function HomeNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeTabStack.Screen
        name="UpdateScreen"
        component={UploadScreen}
        options={{ headerShown: false }}
      />

    </HomeTabStack.Navigator>
  );
}

const AddTabStack = createStackNavigator<AddTabParamList>();

function AddNavigator() {
  return (
    <AddTabStack.Navigator>
      <AddTabStack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{ headerShown: false }}
      />
    </AddTabStack.Navigator>
  );
}
