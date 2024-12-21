import { useEffect, useReducer, useState } from "react";
import { Platform, ImageBackground, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { InstagramDialog, InstagramHeader, InstagramFooter, InstagramMessageModal, InstagramSaveModal } from '../../components/instagram';
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { Conversation } from "../ConversationTypes";
import { conversationReducer } from "./InstagramConversationReducer";
import InstagramPreview from "./InstagramPreview";
import { Constant, ListTypes } from '../Types';
import InstagramProfileModal from "../../components/instagram/InstagramProfileModal";

function InstagramView({route}) {
    const navigation = useNavigation();
    const [conversation, dispatch] = useReducer(conversationReducer, Conversation.Empty(ListTypes.Instagram));
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
                <InstagramHeader data={conversation} dispatch={dispatch} openPreviewModal={openPreviewModal} openSaveModal={openSaveModal} openProfileModal={openProfileModal}></InstagramHeader>
                <InstagramDialog data={conversation} dispatch={dispatch} openModal={openModal}></InstagramDialog>
                <InstagramFooter data={conversation} dispatch={dispatch} openModal={openModal}></InstagramFooter>
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

export default InstagramView;