import { useEffect, useReducer, useState } from "react";
import { Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TikTokDialog, TikTokHeader, TikTokFooter, TikTokMessageModal, TikTokSaveModal, TikTokProfileModal } from '../../components/tiktok';
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { Conversation } from "../ConversationTypes";
import { conversationReducer } from "./TikTokConversationReducer";
import TikTokPreview from "./TikTokPreview";
import { Constant, ListTypes } from '../Types';

function TikTokView({route}) {
    const navigation = useNavigation();
    const [conversation, dispatch] = useReducer(conversationReducer, Conversation.Empty(ListTypes.TIKTOK));
    const [modalVisible, setModalVisible] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [saveModalVisible, setSaveModalVisible] = useState(false);
    const [profileModalVisible, setProfileModalVisible] = useState(false);

    useEffect(() => {
      async function fetchData(itemId) {
        let favouriteString = await AsyncStorage.getItem(Constant.FAVOURITE);
        let favourites = JSON.parse(favouriteString);
        let conversationList = favourites.filter((t) => t.id === itemId);

        dispatch({
          type: 'initConversation',
          data: conversationList[0]
        });
      }

      if(route?.params?.itemId) {
          let itemId = route?.params?.itemId;
          fetchData(itemId); 
      }
    }, [route?.params?.itemId]);

    const closeModal = () => {
        setModalVisible(false);
    };

    const openModal = () => {
      setModalVisible(true);
    };

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

    useEffect(() => {
      hideBottomTabNavigator(navigation);
        return () => {
          showBottomTabNavigator(navigation);
        }
    }, []);

    return (
        <View flex={1}>
            <View style={styles.mainContainer}>
                <TikTokHeader data={conversation} dispatch={dispatch} openPreviewModal={openPreviewModal} 
                                                  openSaveModal={openSaveModal} openProfileModal={openProfileModal}></TikTokHeader>
                <KeyboardAvoidingView flex={1} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <TouchableWithoutFeedback flex={1} onPress={Keyboard.dismiss}>
                      <View flex={1}>
                        <TikTokDialog data={conversation} dispatch={dispatch} openModal={openModal}></TikTokDialog>
                        <TikTokFooter data={conversation} dispatch={dispatch} openModal={openModal}></TikTokFooter>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                <TikTokMessageModal data={conversation} dispatch={dispatch} isVisible={modalVisible} close={closeModal} />  
            </View>
            <TikTokPreview data={conversation} dispatch={dispatch} isVisible={previewVisible} close={closePreviewModal} />
            <TikTokSaveModal data={conversation} dispatch={dispatch} isVisible={saveModalVisible} close={closeSaveModal} />
            <TikTokProfileModal data={conversation} dispatch={dispatch} isVisible={profileModalVisible} close={closeProfileModal} />
        </View>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:'white',
    paddingTop:30
  }
});

export default TikTokView;