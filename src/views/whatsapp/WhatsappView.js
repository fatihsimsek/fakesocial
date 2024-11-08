import { useEffect } from "react";
import { ImageBackground, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WhatsappDialog, WhatsappHeader, WhatsappFooter } from '../../components/whatsapp';
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { WhatsappContent, WhatsappConversation, WhatsappUser, WhatsappMessageStatus, WhatsappMessageType, WhatsappContentType } from "./WhatsappTypes";

const CONVERSATION = new WhatsappConversation('cd7acbea-c1b1-46c1-aed5-3ad53abb28ba', 'First Conversation', 
                          new WhatsappUser('', 'Kerem Şimşek', ''), 
                          [
                            new WhatsappContent('bd7acbbb-c1b1-46d2-aed5-3ad53abb28ba', '10:28', 'Today', WhatsappContentType.BREAK, WhatsappMessageType.SEND, WhatsappMessageStatus.READ),
                            new WhatsappContent('bd7acbea-c1b1-46c1-aed5-3ad53abb28ba', '10:28', 'Hello Robert, your food delivery is almost there.', WhatsappContentType.MESSAGE, WhatsappMessageType.SEND, WhatsappMessageStatus.READ),
                            new WhatsappContent('bd7acbea-c1e2-46c2-aee4-3ad53abb28ba', '10:29', 'Where are you?', WhatsappContentType.MESSAGE, WhatsappMessageType.SEND, WhatsappMessageStatus.REACHED),
                            new WhatsappContent('bd7acbea-c1f3-46c3-aed6-3ad53abb28ba', '12:30', 'I am very close', WhatsappContentType.MESSAGE, WhatsappMessageType.RECEIVED, WhatsappMessageStatus.UNREAD),
                            new WhatsappContent('bd7acbec-c1b1-46a4-aed5-3ad53abb28ba', '12:31', 'Only 2 minutes to come', WhatsappContentType.MESSAGE, WhatsappMessageType.RECEIVED, WhatsappMessageStatus.READ),
                            new WhatsappContent('bd7acbca-c1b1-46a4-aed5-3ad53abb28ba', '12:31', 'OK', WhatsappContentType.MESSAGE, WhatsappMessageType.SEND, WhatsappMessageStatus.UNREAD)
                          ]);

function WhatsAppView() {
    const navigation = useNavigation();

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
                    <WhatsappHeader></WhatsappHeader>
                    <WhatsappDialog data={CONVERSATION.contents}></WhatsappDialog>
                    <WhatsappFooter></WhatsappFooter>
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