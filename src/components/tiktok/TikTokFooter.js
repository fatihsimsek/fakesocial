import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { SendIcon, CameraIcon } from '../icons';
import {launchImageLibrary} from 'react-native-image-picker';

function TikTokFooter({data, dispatch, openModal}) {
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
                <TouchableOpacity onPress={onAddImage}>
                    <View style={styles.imageContainer}>
                        <CameraIcon size={28} fill='white' />
                    </View>
                </TouchableOpacity>
                <TextInput
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    multiline
                    value={data.tempContent.content}
                    onChangeText={onTextChange}
                    autoCorrect={false} />    
                <TouchableOpacity onPress={onSend}>
                    <View style={styles.buttonContainer}>
                        <SendIcon size={28} stroke="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        margin: 10
    },
    textInputContainer: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f3',
        borderColor: '#808080',
        padding: 10,
        borderRadius: 20,
        marginRight: 5,
        flex: 1,
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
        marginTop:8
    },
    imageContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        backgroundColor: '#405DE6'
    },
    buttonContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10
    }
});

export default TikTokFooter;