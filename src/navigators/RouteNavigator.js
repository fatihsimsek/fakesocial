import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsView from '../views/SettingsView';
import HomeNavigator from './HomeNavigator';
import FavouriteView from '../views/FavouriteView';
import {HomeIcon, StarIcon, SettingsIcon} from '../components/icons';

const Tab = createBottomTabNavigator();

function RouteNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomePage">
        <Tab.Screen name="HomePage" component={HomeNavigator} 
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <HomeIcon stroke={"gray"} size={size} />
            )}}
        />
        <Tab.Screen name="Favourite" component={FavouriteView} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <StarIcon stroke={"gray"} size={size} />
            )}}
        />
        <Tab.Screen name="Settings" component={SettingsView} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <SettingsIcon stroke={"gray"} size={size} />
            )}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RouteNavigator;
