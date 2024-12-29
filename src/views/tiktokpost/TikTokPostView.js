import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TikTokPostHeader, TikTokPostImage, TikTokPostFooter } from "../../components/tiktokpost";
import TikTokPostPreview from "./TikTokPostPreview";

function TikTokPostView() {
    return (
      <View flex={1}>
          <View style={styles.mainContainer}>
            <TikTokPostHeader></TikTokPostHeader>
            <TikTokPostImage></TikTokPostImage>
            <TikTokPostFooter></TikTokPostFooter>
          </View>
          <TikTokPostPreview></TikTokPostPreview>
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

export default TikTokPostView;