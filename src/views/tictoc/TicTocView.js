import { useEffect } from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";

function TicTocView() {
    const navigation = useNavigation();

    const onNavigateHome = () => {
      navigation.dispatch(CommonActions.goBack());
  }
    
    useEffect(() => {
      hideBottomTabNavigator(navigation);
        return () => {
          showBottomTabNavigator(navigation);
        }
    }, []);

    return (
        <View style={{marginTop:40}}>
             <TouchableOpacity onPress={onNavigateHome}>
              <Text>TicToc</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TicTocView;