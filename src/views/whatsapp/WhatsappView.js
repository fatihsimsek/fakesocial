import { useEffect, useReducer } from "react";
import { ImageBackground, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WhatsappDialog, WhatsappHeader, WhatsappFooter } from '../../components/whatsapp';
import { hideBottomTabNavigator, showBottomTabNavigator } from "../../navigators/Functions";
import { WhatsappConversation } from "./WhatsappTypes";
import { conversationReducer } from "./WhatsappConversationReducer";

function WhatsAppView() {
    const navigation = useNavigation();
    const [conversation, dispatch] = useReducer(conversationReducer, WhatsappConversation.Empty());

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
                    <WhatsappFooter data={conversation} dispatch={dispatch}></WhatsappFooter>
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