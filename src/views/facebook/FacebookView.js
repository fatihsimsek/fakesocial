import { useEffect } from "react";
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";

function FacebookView() {
    const navigation = useNavigation();
    
    useEffect(() => {
      hideBottomTabNavigator(navigation);
        return () => {
          showBottomTabNavigator(navigation);
        }
    }, []);

    return (
        <View>
            <Text>Facebook</Text>
        </View>
    );
}

export default FacebookView;