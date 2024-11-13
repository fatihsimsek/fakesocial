import React, {useState} from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity, Modal, Pressable, Switch } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { SendIcon } from '../icons';
import { WhatsappMessageStatus, WhatsappContent, WhatsappMessageType, WhatsappContentType } from '../../views/whatsapp/WhatsappTypes';
import { generateUUID } from "../../navigators/Functions";

function WhatsappFooter({data, dispatch}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [messageIsSend, setMessageIsSend] = useState(true);
    const [messageIsBreak, setMessageIsBreak] = useState(false);
    const [messageStatus, setMessageStatus] = useState(WhatsappMessageStatus.SEEN);
    const [messageStatusOpen, setMessageStatusOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messageTime, setMessageTime] = useState('00:00');

    const [messageStatuses, setMessageStatuses] = useState([
        {label: WhatsappMessageStatus.RECEIVED, value: WhatsappMessageStatus.RECEIVED},
        {label: WhatsappMessageStatus.SEEN, value: WhatsappMessageStatus.SEEN},
        {label: WhatsappMessageStatus.SEND, value: WhatsappMessageStatus.SEND}
      ]);

    const onSendMessage = () => {
        if(message.length > 0) {
            setModalVisible(true);
        }
    };

    const cancelModal = () => {
        setMessage('');
        setModalVisible(false);
    }

    const addMessage = () => {
        let contentType = messageIsBreak ? WhatsappContentType.BREAK : WhatsappContentType.MESSAGE;
        let messageType = messageIsSend ? WhatsappMessageType.SEND : WhatsappMessageType.RECEIVED;

        let content = new WhatsappContent(generateUUID(), messageTime, message, contentType, messageType, messageStatus);
        dispatch({
            type: 'addContent',
            data: content,
        });

        setMessage('');
        setModalVisible(false);
    }

    const toggleMessageIsBreak = () => setMessageIsBreak(previousState => !previousState);
    const toggleMessageIsSend = () => setMessageIsSend(previousState => !previousState);

    return (
        <View style={styles.footerContainer}>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.centerContainer}>
                        <View style={styles.modalChoiceContainer}>
                        <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>IsSend:</Text>
                                <Switch style={styles.modalValue} value={messageIsSend}
                                        onValueChange={toggleMessageIsSend} />
                            </View>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>Date Break:</Text>
                                <Switch style={styles.modalValue} value={messageIsBreak}
                                        onValueChange={toggleMessageIsBreak} />
                            </View>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>Time:</Text>
                                <TextInput style={styles.modalValue} 
                                           placeholder={"Type time"} 
                                           value={messageTime}
                                           onChangeText={setMessageTime} />
                            </View>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>Status:</Text>
                                <View style={styles.modalValue} >
                                    <DropDownPicker
                                        open={messageStatusOpen}
                                        value={messageStatus}
                                        items={messageStatuses}
                                        setOpen={setMessageStatusOpen}
                                        setValue={setMessageStatus}
                                        setItems={setMessageStatuses} />
                                </View>            
                            </View>
                        </View>
                        <View style={styles.modalButtonContainer}>
                            <Pressable onPress={cancelModal}>
                                <Text style={styles.modalButtonTextStyle}>Cancel</Text>
                            </Pressable>
                            <Pressable onPress={addMessage}>
                                <Text style={styles.modalButtonTextStyle}>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage} />
            </View>
            <TouchableOpacity onPress={onSendMessage}>
                <View style={styles.buttonContainer}>
                    <SendIcon size={28} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end',
    },
    textInputContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        marginRight: 5,
        flex: 1,
        alignItems: 'flex-end',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#0C6157',
        borderRadius: 25,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerContainer: {
        width: "80%",
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalChoiceContainer :{
      },
      modalRowContainer:{
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:10
      },
      modalText:{
        width:"33%",
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'500'
      },
      modalValue:{
        width:"66%",
        flexDirection:'row',
        justifyContent:'flex-start'
      },
      modalButtonContainer: {
         flexDirection:'row',
      },
      modalButtonTextStyle: {
        borderRadius: 5,
        padding: 10,
        marginBottom:10,
        marginTop:20,
        marginHorizontal:10,
        elevation: 2,
        backgroundColor: '#25d366'
      },
});

export default WhatsappFooter;