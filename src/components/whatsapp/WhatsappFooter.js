import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { SendIcon } from '../icons';

function WhatsappFooter({data, dispatch, openModal}) {
    const onTextChange = (text) => {
        dispatch({
            type: 'updateTempContent',
            data: {
                ...data.tempContent,
                content:text
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
            <TouchableOpacity onPress={openModal}>
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
    
});

export default WhatsappFooter;