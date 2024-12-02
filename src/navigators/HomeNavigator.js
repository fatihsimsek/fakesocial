import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeView from '../views/HomeView';
import InstagramView from '../views/instagram/InstagramView';
import WhatsappView from '../views/whatsapp/WhatsappView';
import TicTocView from "../views/tictoc/TicTocView";

const HomeStack = createStackNavigator();

function HomeNavigator({route}) {
    useEffect(() => {
        console.log('Route-HomeNavigator:');
        if(route?.params?.itemId){
            console.log("ItemId:" + route.params.itemId);
        }
    });

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