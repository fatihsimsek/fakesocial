import React, {useState, useEffect, useReducer} from "react";
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postReducer } from "./InstagramPostReducer";
import { InstagramPostHeader, InstagramPostBody, InstagramPostFooter, InstagramPostProfileModal, InstagramPostSaveModal, InstagramPostFooterModal } from "../../components/instagrampost";
import InstagramPostPreview from "./InstagramPostPreview";
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { Constant, ListTypes } from '../Types';
import { Post } from "../PostTypes";

function InstagramPostView({route}) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [post, dispatch] = useReducer(postReducer, Post.Empty(ListTypes.INSTAGRAMPOST));
  const [previewVisible, setPreviewVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [footerModalVisible, setFooterModalVisible] = useState(false);

  useEffect(() => {
    async function fetchData(itemId) {
      let favouriteString = await AsyncStorage.getItem(Constant.FAVOURITE);
      let favourites = JSON.parse(favouriteString);
      let conversationList = favourites.filter((t) => t.id === itemId);

      dispatch({
        type: 'initPost',
        data: conversationList[0]
      });
    }

    if(route?.params?.itemId) {
        let itemId = route?.params?.itemId;
        fetchData(itemId); 
    }
  }, [route?.params?.itemId]);

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

  const openProfileModal = () => {
    setProfileModalVisible(true);
  };

  const closeProfileModal = () => {
    setProfileModalVisible(false);
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
          <View style={{...styles.mainContainer, paddingTop: insets.top}}>
            <InstagramPostHeader data={post} dispatch={dispatch} openPreviewModal={openPreviewModal} 
                                 openSaveModal={openSaveModal} openProfileModal={openProfileModal}></InstagramPostHeader>
            <InstagramPostBody data={post} dispatch={dispatch}></InstagramPostBody>
            <InstagramPostFooter data={post} dispatch={dispatch} openFooterModal={openFooterModal}></InstagramPostFooter>
          </View>
          <InstagramPostPreview data={post} dispatch={dispatch} isVisible={previewVisible} close={closePreviewModal}></InstagramPostPreview>
          <InstagramPostProfileModal data={post} dispatch={dispatch} isVisible={profileModalVisible} close={closeProfileModal}></InstagramPostProfileModal>
          <InstagramPostSaveModal data={post} dispatch={dispatch} isVisible={saveModalVisible} close={closeSaveModal}></InstagramPostSaveModal>
          <InstagramPostFooterModal data={post} dispatch={dispatch} isVisible={footerModalVisible} close={closeFooterModal}></InstagramPostFooterModal> 
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:'white'
  }
});

export default InstagramPostView;