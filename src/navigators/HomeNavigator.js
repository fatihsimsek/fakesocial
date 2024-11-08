import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeView from '../views/HomeView';
import FacebookView from '../views/facebook/FacebookView';
import InstagramView from '../views/instagram/InstagramView';
import WhatsappView from '../views/whatsapp/WhatsappView';

const HomeStack = createStackNavigator();

function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeView} options={{headerShown:false}} />
            <HomeStack.Screen name="Whatsapp" component={WhatsappView} options={{headerShown:false}}  />  
            <HomeStack.Screen name="Instagram" component={InstagramView} />   
            <HomeStack.Screen name="Facebook" component={FacebookView} />    
        </HomeStack.Navigator>
    );
}

export default HomeNavigator;