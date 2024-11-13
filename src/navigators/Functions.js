import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';

export function hideBottomTabNavigator(navigation){
    navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none'
        }
      });
}

export function showBottomTabNavigator(navigation){
    navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex'
        }
      });
}

export function generateUUID(){
  return uuidv4();
}