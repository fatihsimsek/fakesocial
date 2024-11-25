import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { SendIcon, ImageIcon } from '../icons';
import {launchImageLibrary} from 'react-native-image-picker';

function WhatsappFooter({data, dispatch, openModal}) {
    const options = {
        title: 'Select Image',
        mediaType: 'photo',
        includeBase64: false
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

    const onSend = () => {
        if(data.tempContent.content?.length > 0){
            openModal();
        }
    };

    const onAddImage = () => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
               console.log('User cancelled image picker');
            } 
            else if (response.error) {
               console.log('Image picker error: ', response.error);
            } 
            else {
               let imageUri = response.uri || response.assets?.[0]?.uri;
               dispatch({
                    type: 'updateTempContent',
                    data: {
                        ...data.tempContent,
                        imageUrl:imageUri
                    }
               });
               setTimeout(() => { openModal(); }, 1000);
            }
        });
    };

    return (
        <View style={styles.footerContainer}> 
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    multiline
                    value={data.tempContent.content}
                    onChangeText={onTextChange} />
            </View>
            <TouchableOpacity onPress={onAddImage}>
                <View style={styles.buttonContainer}>
                    <ImageIcon size={28} color="white" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSend}>
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
        marginLeft:5
    },
    
});

export default WhatsappFooter;