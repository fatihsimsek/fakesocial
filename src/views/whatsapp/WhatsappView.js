import { useEffect, useReducer, useState } from "react";
import { ImageBackground, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WhatsappDialog, WhatsappHeader, WhatsappFooter, WhatsappMessageModal } from '../../components/whatsapp';
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { WhatsappConversation, WhatsappMessageStatus } from "./WhatsappTypes";
import { conversationReducer } from "./WhatsappConversationReducer";

function WhatsAppView() {
    const navigation = useNavigation();
    const [conversation, dispatch] = useReducer(conversationReducer, WhatsappConversation.Empty());
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };

    const openModal = () => {
      setModalVisible(true);
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
                    <WhatsappHeader data={conversation}></WhatsappHeader>
                    <WhatsappDialog data={conversation}></WhatsappDialog>
                    <WhatsappFooter data={conversation} dispatch={dispatch} sendMessage={openModal}></WhatsappFooter>
                    <WhatsappMessageModal data={conversation} dispatch={dispatch} 
                                          isVisible={modalVisible} close={closeModal} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent:'flex-start',
    paddingTop:20
  },
  backgroundImg:{
    flex:1
  }
});

export default WhatsAppView;