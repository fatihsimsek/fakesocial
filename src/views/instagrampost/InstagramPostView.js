import React, {useEffect} from "react";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InstagramPostHeader, InstagramPostImage, InstagramPostFooter } from "../../components/instagrampost";
import InstagramPostPreview from "./InstagramPostPreview";
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";

function InstagramPostView() {
  const navigation = useNavigation();

  useEffect(() => {
      hideBottomTabNavigator(navigation);
        return () => {
          showBottomTabNavigator(navigation);
        }
  }, []);

  return (
      <View flex={1}>
          <View style={styles.mainContainer}>
            <InstagramPostHeader></InstagramPostHeader>
            <InstagramPostImage></InstagramPostImage>
            <InstagramPostFooter></InstagramPostFooter>
          </View>
          <InstagramPostPreview></InstagramPostPreview>
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:'white',
    ...Platform.select({
      ios: {
        paddingTop:20
      },
      android: {
        paddingTop:10
      }
    })
  }
});

export default InstagramPostView;