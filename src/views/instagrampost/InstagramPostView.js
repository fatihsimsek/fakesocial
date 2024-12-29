import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { InstagramPostHeader, InstagramPostImage, InstagramPostFooter } from "../../components/instagrampost";
import InstagramPostPreview from "./InstagramPostPreview";

function InstagramPostView() {
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