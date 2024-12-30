import React, {useState, useEffect, useReducer} from "react";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { postReducer } from "./InstagramPostReducer";
import { InstagramPostHeader, InstagramPostBody, InstagramPostFooter } from "../../components/instagrampost";
import InstagramPostPreview from "./InstagramPostPreview";
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { ListTypes } from '../Types';
import { Post } from "../PostTypes";

function InstagramPostView() {
  const navigation = useNavigation();
  const [post, dispatch] = useReducer(postReducer, Post.Empty(ListTypes.INSTAGRAMPOST));
  const [previewVisible, setPreviewVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);

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

  useEffect(() => {
      hideBottomTabNavigator(navigation);
        return () => {
          showBottomTabNavigator(navigation);
        }
  }, []);

  return (
      <View flex={1}>
          <View style={styles.mainContainer}>
            <InstagramPostHeader data={post} dispatch={dispatch} openPreviewModal={openPreviewModal} openSaveModal={openSaveModal}></InstagramPostHeader>
            <InstagramPostBody data={post} dispatch={dispatch}></InstagramPostBody>
            <InstagramPostFooter data={post} dispatch={dispatch}></InstagramPostFooter>
          </View>
          <InstagramPostPreview data={post} dispatch={dispatch}></InstagramPostPreview>
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