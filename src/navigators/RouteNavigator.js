import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsView from '../views/SettingsView';
import HomeNavigator from './HomeNavigator';
import FavouriteView from '../views/FacebookView';
import {HomeIcon, FavouriteIcon, SettingsIcon} from '../components/icons';

const Tab = createBottomTabNavigator();

function RouteNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeNavigator">
        <Tab.Screen name="HomeNavigator" component={HomeNavigator} 
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <HomeIcon color={color} size={size} />
            )}}
        />
        <Tab.Screen name="Favourite" component={FavouriteView} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <FavouriteIcon color={color} size={size} />
            )}}
        />
        <Tab.Screen name="Settings" component={SettingsView} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <SettingsIcon color={color} size={size} />
            )}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RouteNavigator;
