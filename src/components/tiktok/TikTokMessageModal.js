import React, {useState} from 'react';
import { Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput, Text, View, StyleSheet, Modal, Pressable, Switch, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {  ConversationContent, ConversationMessageType, ConversationContentType, TikTokConversationMessageStatus } from '../../views/ConversationTypes';
import { generateUUID } from "../../navigators/Functions";

function TikTokMessageModal({data, dispatch, isVisible, close}) {
    const [messageStatusOpen, setMessageStatusOpen] = useState(false);

    const [messageStatuses, setMessageStatuses] = useState([
        {label: TikTokConversationMessageStatus.NOTSENT, value: TikTokConversationMessageStatus.NOTSENT },
        {label: TikTokConversationMessageStatus.SENT, value: TikTokConversationMessageStatus.SENT },
        {label: TikTokConversationMessageStatus.SEEN, value: TikTokConversationMessageStatus.SEEN }
    ]);

    const toggleMessageIsBreak = (value) => {
        dispatch({
            type: 'updateTempContent',
            data: {
                ...data.tempContent,
                isBreak: value
            }
        });    
    };

    const toggleMessageIsSend = (value) => {
        dispatch({
            type: 'updateTempContent',
            data: {
                ...data.tempContent,
                isSend: value
            }
        });    
    };

    const onTextChange = (text) => {
        dispatch({
            type: 'updateTempContent',
            data: {
                ...data.tempContent,
                content:text
            }
        });
    };

    const onMessageStatusChange = (callback) => {
        let selectedValue = callback(data.tempContent.status);
        dispatch({
            type: 'updateTempContent',
            data: {
                ...data.tempContent,
                status:selectedValue
            }
        });
    };

    const cancelModal = () => {
        dispatch({
            type: 'deleteTempContent'
        });
        close();
    };

    const saveMessage = () => {
        let contentType = data.tempContent.isBreak ? ConversationContentType.BREAK : ConversationContentType.MESSAGE;
        let messageType = data.tempContent.isSend ? ConversationMessageType.SEND : ConversationMessageType.RECEIVED;

        if(data.tempContent.id){
            let content = new ConversationContent(data.tempContent.id, data.tempContent.time, data.tempContent.content, contentType, 
                                              messageType, data.tempContent.status, data.tempContent.imageUrl);
            dispatch({
                type: 'updateContent',
                data: content,
            });
        }
        else {
            let content = new ConversationContent(generateUUID(), data.tempContent.time, data.tempContent.content, contentType, 
                                              messageType, data.tempContent.status, data.tempContent.imageUrl);
            dispatch({
                type: 'addContent',
                data: content,
            });
        }
        close();
    };

    const deleteMessage = () => {
        dispatch({
            type: 'deleteContent',
            id: data.tempContent.id,
        });
        close();
    };

    return(
        <Modal animationType="slide" visible={isVisible}>
            <KeyboardAvoidingView flex={1} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback flex={1} onPress={Keyboard.dismiss}>
                <View style={styles.modalContainer}>
                    <View style={styles.centerContainer}>
                        <View style={styles.modalChoiceContainer}>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>Content:</Text>
                                <TextInput style={styles.modalValue} 
                                            placeholder={"Type a content"} 
                                            value={data.tempContent.content}
                                            onChangeText={onTextChange}
                                            autoCorrect={false} />
                            </View>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>IsSend:</Text>
                                <Switch style={styles.switchValue} value={data.tempContent.isSend}
                                        onValueChange={toggleMessageIsSend} />
                            </View>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>Date Break:</Text>
                                <Switch style={styles.switchValue} value={data.tempContent.isBreak}
                                        onValueChange={toggleMessageIsBreak} />
                            </View>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>Status:</Text>
                                <View style={styles.modalValue} >
                                    <DropDownPicker
                                        open={messageStatusOpen}
                                        value={data.tempContent.status}
                                        items={messageStatuses}
                                        setOpen={setMessageStatusOpen}
                                        setValue={onMessageStatusChange}
                                        setItems={setMessageStatuses} />
                                </View>            
                            </View>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>Image:</Text>
                                {
                                    (data.tempContent.imageUrl?.length > 0) && 
                                    (<Image source={{uri: data.tempContent.imageUrl}} style={{...styles.modalValue, height: 150}}></Image>)
                                }
                            </View>
                        </View>
                        <View style={styles.modalButtonContainer}>
                            <Pressable onPress={cancelModal}>
                                <Text style={styles.modalButtonTextStyle}>Cancel</Text>
                            </Pressable>
                            {
                                data.tempContent.id && 
                                <Pressable onPress={deleteMessage}>
                                    <Text style={styles.modalButtonTextStyle}>Delete</Text>
                                </Pressable>
                            }
                            <Pressable onPress={saveMessage}>
                                <Text style={styles.modalButtonTextStyle}>Save</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                 </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
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
    switchValue:{
        flexDirection:'row',
        justifyContent:'flex-start',
        ...Platform.select({
            ios: {
              width: "66%",
            },
        })
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
    }

});

export default TikTokMessageModal;