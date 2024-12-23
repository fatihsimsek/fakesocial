import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeView from '../views/HomeView';
import WhatsappView from '../views/whatsapp/WhatsappView';
import InstagramPostView from '../views/instagrampost/InstagramPostView';
import InstagramView from '../views/instagram/InstagramView';
import TikTokPostView from "../views/tiktokpost/TikTokPostView";
import TikTokView from "../views/tiktok/TikTokView";

const HomeStack = createStackNavigator();

function HomeNavigator({route}) {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeView} options={{headerShown:false}} />
            <HomeStack.Screen name="Whatsapp" component={WhatsappView} options={{headerShown:false}}  />  
            <HomeStack.Screen name="InstagramPost" component={InstagramPostView} options={{headerShown:false}} />
            <HomeStack.Screen name="Instagram" component={InstagramView} options={{headerShown:false}} />
            <HomeStack.Screen name="TikTokPost" component={TikTokPostView} options={{headerShown:false}} />      
            <HomeStack.Screen name="TikTok" component={TikTokView} options={{headerShown:false}} />    
        </HomeStack.Navigator>
    );
}

export default HomeNavigator;