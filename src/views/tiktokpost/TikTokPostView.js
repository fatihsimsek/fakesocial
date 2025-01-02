import React, {useState, useEffect, useReducer} from "react";
import { StyleSheet, ImageBackground, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TikTokPostHeader, TikTokPostBody, TikTokPostFooter } from "../../components/tiktokpost";
import TikTokPostPreview from "./TikTokPostPreview";
import { postReducer } from "./TikTokPostReducer";
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { Constant, ListTypes } from '../Types';
import { Post } from "../PostTypes";

function TikTokPostView() {
  const navigation = useNavigation();
  const [post, dispatch] = useReducer(postReducer, Post.Empty(ListTypes.TIKTOKPOST));

  useEffect(() => {
    hideBottomTabNavigator(navigation);
      return () => {
        showBottomTabNavigator(navigation);
      }
  }, []);

  return (
      <View flex={1}>
          <ImageBackground
                style={styles.backgroundImg}
                source={require('../../assets/images/tiktokpost_default.png')}
                resizeMode="cover">
              <View style={styles.mainContainer}>
                <TikTokPostHeader data={post} dispatch={dispatch}></TikTokPostHeader>
                <TikTokPostBody data={post} dispatch={dispatch}></TikTokPostBody>
                <TikTokPostFooter data={post} dispatch={dispatch}></TikTokPostFooter>
              </View>
          </ImageBackground>
          <TikTokPostPreview data={post} dispatch={dispatch}></TikTokPostPreview>
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    ...Platform.select({
      ios: {
        paddingTop:20
      },
      android: {
        paddingTop:10
      }
    })
  },
  backgroundImg:{
    flex:1
  }
});

export default TikTokPostView;