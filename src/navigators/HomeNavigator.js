import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeView from '../views/HomeView';
import InstagramView from '../views/instagram/InstagramView';
import WhatsappView from '../views/whatsapp/WhatsappView';
import TicTocView from "../views/tictoc/TicTocView";

const HomeStack = createStackNavigator();

function HomeNavigator({route}) {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeView} options={{headerShown:false}} />
            <HomeStack.Screen name="Whatsapp" component={WhatsappView} options={{headerShown:false}}  />  
            <HomeStack.Screen name="Instagram" component={InstagramView} options={{headerShown:false}} />   
            <HomeStack.Screen name="TicToc" component={TicTocView} options={{headerShown:false}} />    
        </HomeStack.Navigator>
    );
}

export default HomeNavigator;