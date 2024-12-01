import { useEffect, useReducer, useState } from "react";
import { Platform, ImageBackground, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WhatsappDialog, WhatsappHeader, WhatsappFooter, WhatsappMessageModal, WhatsappSaveModal } from '../../components/whatsapp';
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { WhatsappConversation } from "./WhatsappTypes";
import { conversationReducer } from "./WhatsappConversationReducer";
import WhatsappPreview from "./WhatsappPreview";

function WhatsAppView() {
    const navigation = useNavigation();
    const [conversation, dispatch] = useReducer(conversationReducer, WhatsappConversation.Empty());
    const [modalVisible, setModalVisible] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [saveModalVisible, setSaveModalVisible] = useState(false);

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
                <View style={styles.mainContainer}>
                    <WhatsappHeader data={conversation} dispatch={dispatch} openPreviewModal={openPreviewModal} openSaveModal={openSaveModal}></WhatsappHeader>
                    <WhatsappDialog data={conversation} dispatch={dispatch} openModal={openModal}></WhatsappDialog>
                    <WhatsappFooter data={conversation} dispatch={dispatch} openModal={openModal}></WhatsappFooter>
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
    justifyContent:'flex-start',
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

export default WhatsAppView;