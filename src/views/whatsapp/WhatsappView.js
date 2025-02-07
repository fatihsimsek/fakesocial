import { useEffect, useReducer, useState } from "react";
import { Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ImageBackground, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WhatsappDialog, WhatsappHeader, WhatsappFooter, WhatsappMessageModal, WhatsappSaveModal } from '../../components/whatsapp';
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { Conversation } from "../ConversationTypes";
import { conversationReducer } from "./WhatsappConversationReducer";
import WhatsappPreview from "./WhatsappPreview";
import { Constant, ListTypes } from '../Types';

function WhatsAppView({route}) {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    const [conversation, dispatch] = useReducer(conversationReducer, Conversation.Empty(ListTypes.WHATSAPP));
    const [modalVisible, setModalVisible] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [saveModalVisible, setSaveModalVisible] = useState(false);

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
                source={require('../../assets/images/whatsapp.png')}
                resizeMode="cover">
                <View style={{...styles.mainContainer, paddingTop: insets.top}}>
                    <WhatsappHeader data={conversation} dispatch={dispatch} openPreviewModal={openPreviewModal} openSaveModal={openSaveModal}></WhatsappHeader>
                    <KeyboardAvoidingView flex={1} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                      <TouchableWithoutFeedback flex={1} onPress={Keyboard.dismiss}>
                        <View flex={1}>
                          <WhatsappDialog data={conversation} dispatch={dispatch} openModal={openModal}></WhatsappDialog>
                          <WhatsappFooter data={conversation} dispatch={dispatch} openModal={openModal}></WhatsappFooter>
                        </View>
                      </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                    <WhatsappMessageModal data={conversation} dispatch={dispatch} isVisible={modalVisible} close={closeModal} />
                </View>
            </ImageBackground>
            <WhatsappPreview data={conversation} dispatch={dispatch} isVisible={previewVisible} close={closePreviewModal} />
            <WhatsappSaveModal data={conversation} dispatch={dispatch} isVisible={saveModalVisible} close={closeSaveModal} />
        </View>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent:'flex-start'
  },
  backgroundImg:{
    flex:1
  }
});

export default WhatsAppView;