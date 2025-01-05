import React, {useState, useEffect, useReducer} from "react";
import { StyleSheet, ImageBackground, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TikTokPostHeader, TikTokPostBody, TikTokPostFooter, TikTokPostSaveModal, TikTokPostFooterModal } from "../../components/tiktokpost";
import TikTokPostPreview from "./TikTokPostPreview";
import { postReducer } from "./TikTokPostReducer";
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { Constant, ListTypes } from '../Types';
import { Post } from "../PostTypes";

function TikTokPostView({route}) {
  const navigation = useNavigation();
  const [post, dispatch] = useReducer(postReducer, Post.Empty(ListTypes.TIKTOKPOST));
  const [previewVisible, setPreviewVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [footerModalVisible, setFooterModalVisible] = useState(false);

  const openPreviewModal = () => {
    setPreviewVisible(true);
  };

  const closePreviewModal = () => {
    setPreviewVisible(false);
  };

  const openSaveModal = () => {
    setSaveModalVisible(true);
  };

  const closeSaveModal = () => {
    setSaveModalVisible(false);
  };

  const openFooterModal = () => {
    setFooterModalVisible(true);
  };

  const closeFooterModal = () => {
    setFooterModalVisible(false);
  };


  useEffect(() => {
    hideBottomTabNavigator(navigation);
      return () => {
        showBottomTabNavigator(navigation);
      }
  }, []);

  return (
      <View flex={1}>  
          {
            post.imageUrl ? <Image source={{uri: post.imageUrl}} style={styles.backgroundImg} resizeMode="cover" /> 
                          : <Image source={require('../../assets/images/tiktokpost_default.png')} style={styles.backgroundImg} resizeMode="cover" />
          }     
          <View style={styles.mainContainer}>
            <TikTokPostHeader data={post} dispatch={dispatch}></TikTokPostHeader>
            <TikTokPostBody data={post} dispatch={dispatch}></TikTokPostBody>
            <TikTokPostFooter data={post} dispatch={dispatch} openFooterModal={openFooterModal}></TikTokPostFooter>
          </View>
          <TikTokPostPreview data={post} dispatch={dispatch} isVisible={previewVisible} close={closePreviewModal}></TikTokPostPreview>
          <TikTokPostSaveModal data={post} dispatch={dispatch} isVisible={saveModalVisible} close={closeSaveModal}></TikTokPostSaveModal>
          <TikTokPostFooterModal data={post} dispatch={dispatch} isVisible={footerModalVisible} close={closeFooterModal}></TikTokPostFooterModal> 
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width:'100%',
    height:'100%',
    position:'absolute',
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