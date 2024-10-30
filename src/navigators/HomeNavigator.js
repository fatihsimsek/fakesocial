import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeView from '../views/HomeView';
import FacebookView from '../views/FacebookView';
import InstagramView from '../views/InstagramView';
import WhatsappView from '../views/WhatsappView';


const Stack = createStackNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeView} options={{headerShown:false}} />
            <Stack.Screen name="Whatsapp" component={WhatsappView} />  
            <Stack.Screen name="Instagram" component={InstagramView} />   
            <Stack.Screen name="Facebook" component={FacebookView} />    
        </Stack.Navigator>
    );
}

export default HomeNavigator;