import { useEffect, useReducer, useState } from "react";
import { Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InstagramDialog, InstagramHeader, InstagramFooter, InstagramMessageModal, InstagramSaveModal, InstagramProfileModal } from '../../components/instagram';
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { Conversation } from "../ConversationTypes";
import { conversationReducer } from "./InstagramConversationReducer";
import InstagramPreview from "./InstagramPreview";
import { Constant, ListTypes } from '../Types';

function InstagramView({route}) {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    
    const [conversation, dispatch] = useReducer(conversationReducer, Conversation.Empty(ListTypes.INSTAGRAM));
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
            <View style={{...styles.mainContainer, paddingTop: insets.top}}>
                <InstagramHeader data={conversation} dispatch={dispatch} openPreviewModal={openPreviewModal} openSaveModal={openSaveModal} openProfileModal={openProfileModal}></InstagramHeader>
                <KeyboardAvoidingView flex={1} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <TouchableWithoutFeedback flex={1} onPress={Keyboard.dismiss}>
                      <View flex={1}>
                        <InstagramDialog data={conversation} dispatch={dispatch} openModal={openModal}></InstagramDialog>
                        <InstagramFooter data={conversation} dispatch={dispatch} openModal={openModal}></InstagramFooter>
                      </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                <InstagramMessageModal data={conversation} dispatch={dispatch} isVisible={modalVisible} close={closeModal} />
            </View>
            <InstagramPreview data={conversation} dispatch={dispatch} isVisible={previewVisible} close={closePreviewModal} />
            <InstagramSaveModal data={conversation} dispatch={dispatch} isVisible={saveModalVisible} close={closeSaveModal} />
            <InstagramProfileModal data={conversation} dispatch={dispatch} isVisible={profileModalVisible} close={closeProfileModal} />
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

export default InstagramView;